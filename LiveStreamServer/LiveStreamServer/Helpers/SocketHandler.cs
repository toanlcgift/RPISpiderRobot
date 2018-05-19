using System.Net.WebSockets;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using System.IO;

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
                StreamReader streamReader = new StreamReader(SamplesCore.FilePath.Movie.Bach);
                int read = 0;
                int i = 0;
                while ((read = streamReader.Read(buf, 0, buf.Length)) > 0)
                {
                    buffer[i] = Convert.ToByte(buf[i]);
                }
                var outgoing = new ArraySegment<byte>(buffer, 0, buf.Length);
                await this.socket.SendAsync(outgoing, WebSocketMessageType.Binary, true, CancellationToken.None);
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
