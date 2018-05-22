using LiveStreamServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LiveStreamServer.Services
{
    public class StreamingService : IStreamingService
    {
        public IList<Stream> Connections { get; set; }

        public StreamingService()
        {
            Connections = new List<Stream>();
        }

        // Read all bytes from stream.
        public byte[] AnalyzeStream(Stream stream)
        {
            long originalPosititon = 0;
            if (stream.CanSeek)
            {
                originalPosititon = stream.Position;
                stream.Position = 0;
            }

            try
            {
                var readBuffer = new byte[4096];
                int totalBytesRead = 0;
                int byteRead = 0;
                while ((byteRead = stream.Read(readBuffer, totalBytesRead, readBuffer.Length - totalBytesRead)) > 0)
                {
                    totalBytesRead += byteRead;

                    if (totalBytesRead == readBuffer.Length)
                    {
                        var nextByte = stream.ReadByte();
                        if (nextByte != -1)
                        {
                            var temp = new byte[readBuffer.Length * 2];
                            Buffer.BlockCopy(readBuffer, 0, temp, 0, readBuffer.Length);
                            Buffer.SetByte(temp, totalBytesRead, (byte)nextByte);
                            readBuffer = temp;
                            totalBytesRead++;
                        }
                    }
                }

                var buffer = readBuffer;
                if (readBuffer.Length != totalBytesRead)
                {
                    buffer = new byte[totalBytesRead];
                    Buffer.BlockCopy(readBuffer, 0, buffer, 0, totalBytesRead);
                }

                return buffer;
            }
            finally
            {
                if (stream.CanSeek)
                    stream.Position = originalPosititon;
            }
        }
    }
}
