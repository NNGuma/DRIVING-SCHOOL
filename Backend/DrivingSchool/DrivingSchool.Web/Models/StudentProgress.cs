namespace DrivingSchool.Web.Models
{
    public class StudentProgress
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public Booking Booking { get; set; }
        public bool Attended { get; set; }
        public string Notes { get; set; }
        public DateTime RecordedAt { get; set; } = DateTime.UtcNow;
    }
}
