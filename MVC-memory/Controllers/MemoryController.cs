using Microsoft.AspNetCore.Mvc;

namespace MVC_memory.Controllers
{
    public class MemoryController : Controller
    {
        public IActionResult Memory()
        {
            return View();
        }
    }
}
