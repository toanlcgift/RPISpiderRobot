using OpenCvSharp;
using SamplesCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiveStreamServer.Samples
{
    public class FaceDetection : ISample
    {
        public void Run()
        {
            CascadeClassifier cascadeClassifier = new CascadeClassifier("haarcascade_frontalface_default.xml");
            Mat mat = new Mat("Data/Image/Girl.bmp");
            var rect = cascadeClassifier.DetectMultiScale(mat, 1.3, 5, HaarDetectionType.FindBiggestObject);
            
            var x = rect[0];
            Cv2.Rectangle(mat, x, Scalar.Red, 2);
            mat.SaveImage("ahihi.png");
        }
    }
}
