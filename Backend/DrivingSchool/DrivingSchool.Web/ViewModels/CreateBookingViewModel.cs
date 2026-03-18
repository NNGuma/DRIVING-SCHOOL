using Microsoft.AspNetCore.Mvc.Rendering;
using DrivingSchool.Web.Models;
namespace DrivingSchool.Web.ViewModels
{
    public class CreateBookingViewModel
    {
        public Course Course { get; set; }
        public IEnumerable<SelectListItem> InstructorSelectList { get; set; }
        public int CourseId { get; set; }
        public int InstructorId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public PaymentMethod Method { get; set; }
    }
}