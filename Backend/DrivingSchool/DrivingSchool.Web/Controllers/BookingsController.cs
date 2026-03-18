using Microsoft.AspNetCore.Mvc;
using DrivingSchool.Web.Data;
using DrivingSchool.Web.Models;
using System.Linq;

namespace DrivingSchool.Web.Controllers
{
    public class BookingsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public BookingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var bookings = _context.Bookings.ToList();
            return View(bookings);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Booking booking)
        {
            if (ModelState.IsValid)
            {
                _context.Bookings.Add(booking);
                _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }

            return View(booking);
        }
    }
}