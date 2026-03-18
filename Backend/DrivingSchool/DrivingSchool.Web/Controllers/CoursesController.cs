using Microsoft.AspNetCore.Mvc;
using DrivingSchool.Web.Services.Interfaces;
namespace DrivingSchool.Web.Controllers
{
    [Route("courses")]
    public class CoursesController : Controller
    {
        private readonly ICourseService _courseService;
        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }
        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            var courses = await _courseService.GetActiveCoursesAsync();
            return View(courses);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Details(int id)
        {
            var course = await _courseService.GetByIdAsync(id);
            if (course == null) return NotFound();
            return View(course);
        }
    }
}