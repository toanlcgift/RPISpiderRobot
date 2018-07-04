using System.Net.WebSockets;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using System.IO;
using System.Linq;
using LiveStreamServer.Helpers;
using OpenCvSharp;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using OpenCvSharp.Dnn;

namespace LiveStreamServer.Helper
{
    public class SocketHandler
    {
        public const int BufferSize = 4096;

        WebSocket socket;
        Mat currentMat = new Mat();
        IList<Rect> currentFaces = new List<Rect>();
        IList<Rect> currentBodies = new List<Rect>();
        int classId;
        double classProb;

        SocketHandler(WebSocket socket)
        {
            this.socket = socket;
        }

        async Task EchoLoop()
        {
            var buffer = new byte[BufferSize];
            var seg = new ArraySegment<byte>(buffer);

            while (this.socket.State == WebSocketState.Open)
            {
                try
                {
                    Console.WriteLine("client connected");
                    var incoming = await this.socket.ReceiveAsync(seg, CancellationToken.None);
                    if (System.Text.Encoding.UTF8.GetString(seg.ToArray()).Contains("live"))
                    {
                        //Console.WriteLine("rm -rf ClientApp/dist/video.mp4".Bash());
                        //Console.WriteLine("raspivid -o ClientApp/dist/video.h264 -t 2000".Bash());
                        //Console.WriteLine("MP4Box -add ClientApp/dist/video.h264 ClientApp/dist/video.mp4".Bash());
                        //Console.WriteLine("chmod 777 ClientApp/dist/video.mp4".Bash());
                        //Console.WriteLine("rm -rf ClientApp/dist/video.h264".Bash());
                        PushImageStream();
                    }

                    //var outgoing = new ArraySegment<byte>(buffer, 0, incoming.Count);
                    //await this.socket.SendAsync(outgoing, WebSocketMessageType.Text, true, CancellationToken.None);
                }
                catch { }
            }
        }

        async void PushImageStream()
        {
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                Console.WriteLine("run bash shell: 'sudo modprobe bcm2835-v4l2'");
                "sudo modprobe bcm2835-v4l2".Bash();
            }
            CascadeClassifier cascadeClassifier = new CascadeClassifier("haarcascade_frontalface_default.xml");
            // Opens MP4 file (ffmpeg is probably needed)
            var capture = new VideoCapture(0);

            int sleepTime = (int)Math.Round(1000 / ((capture.Fps == 0) ? 60 : capture.Fps));
            var hog = new HOGDescriptor();
            hog.SetSVMDetector(HOGDescriptor.GetDefaultPeopleDetector());
            var recognizer = OpenCvSharp.Face.EigenFaceRecognizer.Create(2);
            var img1 = Cv2.ImRead(SamplesCore.FilePath.Image.Girl, ImreadModes.GrayScale);

            var img2 = Cv2.ImRead(SamplesCore.FilePath.Image.Lenna, ImreadModes.GrayScale);
            System.Console.WriteLine("img1 width: " + img1.Size().Width + " height:" + img1.Size().Height);
            System.Console.WriteLine("img2 width: " + img2.Size().Width + " height:" + img2.Size().Height);
            recognizer.Train(new List<Mat>() { img1, img2 }, new List<int>() { 1, 2 });
            recognizer.Write("trainfile1.dat");
            recognizer.Read("trainfile1.dat");
            System.Console.WriteLine("before predict");
            System.Console.WriteLine("img1 width: " + img1.Size().Width + " height:" + img1.Size().Height);
            System.Console.WriteLine("img2 width: " + img2.Size().Width + " height:" + img2.Size().Height);

            recognizer.Predict(InputArray.Create(img1), out int label, out double confidence);
            System.Console.WriteLine("label: " + label + " confidence: " + confidence);

            const string protoTxt = @"Data/Text/bvlc_googlenet.prototxt";
            const string caffeModel = "bvlc_googlenet.caffemodel";
            const string synsetWords = @"Data/Text/synset_words.txt";
            var classNames = File.ReadAllLines(synsetWords)
                .Select(line => line.Split(' ').Last())
                .ToArray();
            using (var net = CvDnn.ReadNetFromCaffe(protoTxt, caffeModel))
            //using (var window = new Window("capture"))
            {
                // Frame image buffer
                Mat image = new Mat();

                Task.Run(() =>
                {
                    while (true)
                        FaceProcessing(image, cascadeClassifier);
                });

                Task.Run(() =>
                {
                    while (true)
                        HogProcessing(image, hog);
                });

                Task.Run(() =>
                {
                    while (true)
                        CaffeProcessing(image, net, classNames);
                });

                // When the movie playback reaches end, Mat.data becomes NULL.
                while (true)
                {
                    capture.Read(image); // same as cvQueryFrame
                    if (image.Empty())
                        break;

                    currentMat = image.Clone();

                    foreach (var rect in currentFaces)
                    {
                        Cv2.Rectangle(image, rect, Scalar.Red, 2);
                    }

                    foreach (var rect in currentBodies)
                    {
                        Cv2.Rectangle(image, rect, Scalar.Green, 2);
                    }

                    image.PutText(classNames[this.classId] + String.Format(" Probability: {0:P2}", this.classProb),
                        new Point(0 + 10, image.Size().Height - 10), HersheyFonts.HersheyDuplex, 1, Scalar.Black);

                    var bytes = image.ToMemoryStream().ToArray();
                    await this.socket.SendAsync(new ArraySegment<byte>(bytes, 0, bytes.Length), WebSocketMessageType.Binary, true, CancellationToken.None);

                    //if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                    //{
                    //    window.ShowImage(image);
                    //    Cv2.WaitKey(sleepTime);
                    //}

                }
            }
        }

        void FaceProcessing(Mat image, CascadeClassifier cascadeClassifier)
        {
            if (image.Empty())
                return;

            var rects = cascadeClassifier.DetectMultiScale(image, 1.3, 5, HaarDetectionType.FindBiggestObject);
            currentFaces.Clear();
            foreach (var item in rects)
            {
                currentFaces.Add(item);
            }
        }

        void HogProcessing(Mat image, HOGDescriptor hog)
        {
            if (image.Empty())
                return;

            var found = hog.DetectMultiScale(image, 0, new Size(8, 8), new Size(24, 16), 1.05, 2);
            currentBodies.Clear();
            foreach (var item in found)
            {
                currentBodies.Add(item);
            }
        }

        void CaffeProcessing(Mat image, Net net, string[] classNames)
        {
            Console.WriteLine("Layer names: {0}", string.Join(", ", net.GetLayerNames()));
            Console.WriteLine();

            // Convert Mat to batch of images
            using (var inputBlob = CvDnn.BlobFromImage(image, 1, new Size(224, 224), new Scalar(104, 117, 123)))
            {
                net.SetInput(inputBlob, "data");
                using (var prob = net.Forward("prob"))
                {
                    // find the best class
                    GetMaxClass(prob, out int classId, out double classProb);
                    Console.WriteLine("Best class: #{0} '{1}'", classId, classNames[classId]);
                    Console.WriteLine("Probability: {0:P2}", classProb);
                    this.classId = classId;
                    this.classProb = classProb;
                }
            }
        }

        /// <summary>
        /// Find best class for the blob (i. e. class with maximal probability)
        /// </summary>
        /// <param name="probBlob"></param>
        /// <param name="classId"></param>
        /// <param name="classProb"></param>
        private void GetMaxClass(Mat probBlob, out int classId, out double classProb)
        {
            // reshape the blob to 1x1000 matrix
            using (var probMat = probBlob.Reshape(1, 1))
            {
                Cv2.MinMaxLoc(probMat, out _, out classProb, out _, out var classNumber);
                classId = classNumber.X;
            }
        }

        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            var h = new SocketHandler(socket);
            await h.EchoLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.UseWebSockets();
            app.Use(SocketHandler.Acceptor);
        }
    }
}
