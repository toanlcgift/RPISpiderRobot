using System.Net.WebSockets;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using System.IO;
using System.Linq;
using LiveStreamServer.Helpers;

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
            var seg = new ArraySegment<byte>(buffer);

            while (this.socket.State == WebSocketState.Open)
            {
                Console.WriteLine("client connected");
                var incoming = await this.socket.ReceiveAsync(seg, CancellationToken.None);
                if (System.Text.Encoding.UTF8.GetString(seg.ToArray()).Contains("live"))
                {
                    Console.WriteLine("rm -rf ClientApp/dist/video.mp4".Bash());
                    Console.WriteLine("raspivid -o ClientApp/dist/video.h264 -t 2000".Bash());
                    Console.WriteLine("MP4Box -add ClientApp/dist/video.h264 ClientApp/dist/video.mp4".Bash());
                    Console.WriteLine("chmod 777 ClientApp/dist/video.mp4".Bash());
                    Console.WriteLine("rm -rf ClientApp/dist/video.h264".Bash());
                    var bytes = System.Text.Encoding.ASCII.GetBytes("done");
                    await this.socket.SendAsync(new ArraySegment<byte>(bytes, 0, bytes.Length), WebSocketMessageType.Text, true, CancellationToken.None);
                }

                //var outgoing = new ArraySegment<byte>(buffer, 0, incoming.Count);
                //await this.socket.SendAsync(outgoing, WebSocketMessageType.Text, true, CancellationToken.None);
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
