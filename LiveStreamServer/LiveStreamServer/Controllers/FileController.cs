using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LiveStreamServer.Controllers
{
    [Route("api/File")]
    public class FileController : Controller
    {
        [HttpGet("download.mp4")]
        public FileResult DownloadFile()
        {
            var content = new FileStream(SamplesCore.FilePath.Movie.Bach, FileMode.Open, FileAccess.Read, FileShare.Read);
            var response = File(content, "application/octet-stream");//FileStreamResult
            return response;
        }
    }
}