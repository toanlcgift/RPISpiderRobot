using OpenCvSharp;
using SamplesCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace LiveStreamServer.Samples
{
    public class FaceDetection : ISample
    {
        public void Run()
        {
            CascadeClassifier cascadeClassifier = new CascadeClassifier("haarcascade_frontalface_default.xml");
            // Opens MP4 file (ffmpeg is probably needed)
            var capture = new VideoCapture(0);

            int sleepTime = (int)Math.Round(1000 / ((capture.Fps == 0) ? 60 : capture.Fps));

            using (var window = new Window("capture"))
            {
                // Frame image buffer
                Mat image = new Mat();

                // When the movie playback reaches end, Mat.data becomes NULL.
                while (true)
                {
                    capture.Read(image); // same as cvQueryFrame
                    if (image.Empty())
                        break;
                    var rect = cascadeClassifier.DetectMultiScale(image, 1.3, 5, HaarDetectionType.FindBiggestObject);
                    if (rect.Count() > 0)
                    {
                        for (int i = 0; i < rect.Count(); i++)
                        {
                            Cv2.Rectangle(image, rect[i], Scalar.Red, 2);
                        }
                    }
                    if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                        window.ShowImage(image);
                    else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                        image.SaveImage("result.png");
                    Cv2.WaitKey(sleepTime);
                }
            }


            //mat.SaveImage("ahihi.png");
        }
    }
}
