using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace DrivingSchool.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        // CRUD endpoints for courses and instructors can be added here
    }
}
