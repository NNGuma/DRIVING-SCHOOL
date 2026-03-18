namespace DrivingSchool.Web.Models
{
    public enum BookingStatus { Pending, Confirmed, Cancelled, Completed }
    public class Booking
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public string StudentId { get; set; }
        public ApplicationUser Student { get; set; }
        public int? InstructorId { get; set; }
        public Instructor Instructor { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public BookingStatus Status { get; set; } = BookingStatus.Pending;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public int? PaymentId { get; set; }
        public Payment Payment { get; set; }
    }
}