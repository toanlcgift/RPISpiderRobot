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
using static SamplesCore.FilePath;

namespace LiveStreamServer.Helper
{
    public class SocketHandler
    {
        public const int BufferSize = 40960;

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
            var capture = new VideoCapture(Movie.Bach);
            Mat image = new Mat();
            //using (var window = new Window("capture"))
                // When the movie playback reaches end, Mat.data becomes NULL.
                while (true)
                {
                    capture.Read(image); // same as cvQueryFrame
                    if (image.Empty())
                        break;
               
                    var bytes = image.ToMemoryStream().ToArray();
                    //window.ShowImage(image);
                    await this.socket.SendAsync(new ArraySegment<byte>(bytes, 0, bytes.Length), WebSocketMessageType.Binary, true, CancellationToken.None);

                    //if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                    //{
                    //    window.ShowImage(image);
                    //    Cv2.WaitKey(sleepTime);
                    //}

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
