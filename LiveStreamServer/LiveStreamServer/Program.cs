using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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
                new CaffeSample();
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
            TestWiringPi();
            //sample.Run();
            BuildWebHost(args).Run();
        }

        public static void TestWiringPi()
        {
            int ret = Init.WiringPiSetupGpio();
            if (ret == -1)
            {
                Console.WriteLine("Init failed: {0}", ret);
                return;
            }
            for (; ; )
            {
                WiringPi.GPIO.digitalWrite(7, 1);
                Thread.Sleep(1000);
            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
