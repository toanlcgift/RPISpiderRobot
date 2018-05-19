using System.Net.WebSockets;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using System.IO;
using System.Linq;

namespace LiveStreamServer.Helper
{
    public class SocketHandler
    {
        public const int BufferSize = 4096;

        WebSocket socket;

        SocketHandler(WebSocket socket)
        {
            this.socket = socket;
        }

        async Task EchoLoop()
        {
            var buffer = new byte[BufferSize];
            var buf = new char[BufferSize];

            while (this.socket.State == WebSocketState.Open)
            {
                Console.WriteLine("client connected");
                //StreamReader streamReader = new StreamReader(SamplesCore.FilePath.Movie.Bach);
                //streamReader.BaseStream.Seek(BufferSize, SeekOrigin.End);
                //while (streamReader.BaseStream.Position > 0)
                //{
                //    buf.Initialize();
                //    streamReader.BaseStream.Seek(BufferSize, SeekOrigin.Current);
                //    int bytesRead = streamReader.Read(buf, 0, BufferSize);
                //    buffer = buf.Select(x => (byte)x).ToArray();
                //    var outgoing = new ArraySegment<byte>(buffer, 0, buffer.Length);
                //    await this.socket.SendAsync(outgoing, WebSocketMessageType.Binary, true, CancellationToken.None);
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
