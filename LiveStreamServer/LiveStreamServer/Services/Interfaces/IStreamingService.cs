using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LiveStreamServer.Services.Interfaces
{
    interface IStreamingService
    {
        byte[] AnalyzeStream(Stream stream);
    }
}
