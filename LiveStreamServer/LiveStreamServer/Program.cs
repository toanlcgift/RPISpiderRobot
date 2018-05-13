using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using LiveStreamServer.Helpers;
using LiveStreamServer.Samples;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using SamplesCore;
using WiringPi;

namespace LiveStreamServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ISample sample =
            //new CaffeSample();
            //new ClaheSample();
            //new ConnectedComponentsSample();
            //new HOGSample();
            //new HoughLinesSample();
            //new MatOperations();
            //new NormalArrayOperations();
            //new PhotoMethods();
            //new MorphologySample();
            //new PixelAccess();
            //new SolveEquation();
            //new Subdiv2DSample();
            //new SVMSample();
            //new VideoWriterSample();
            //new VideoCaptureSample();
            //TestWiringPi();
            new FaceDetection();
            //sample.Run();
            //"mkdir testdir".Bash();
            BuildWebHost(args).Run();
        }

        public static void TestWiringPi()
        {
            Init.WiringPiSetupSys();
            Init.WiringPiSetup();

            int i = 0;
            for (; ; )
            {
                WiringPi.GPIO.digitalWrite(0, (i++) % 2);
                Console.WriteLine(i % 2);
                Thread.Sleep(1000);
            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("http://0.0.0.0:5000")
                .UseStartup<Startup>()
                .Build();
    }
}
