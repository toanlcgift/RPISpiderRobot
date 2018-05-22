using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LiveStreamServer.Controllers
{
    [Produces("application/json")]
    [Route("api/Video")]
    public class VideoController : Controller
    {
    }
}