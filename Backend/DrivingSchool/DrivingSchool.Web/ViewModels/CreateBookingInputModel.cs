using DrivingSchool.Web.Models;
namespace DrivingSchool.Web.ViewModels
{
    public class CreateBookingInputModel
    {
        public int CourseId { get; set; }
        public int InstructorId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public PaymentMethod Method { get; set; }
        public decimal Amount { get; set; }
    }
}
