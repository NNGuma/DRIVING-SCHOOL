namespace DrivingSchool.Web.Models
{
    public class InstructorAvailability
    {
        public int Id { get; set; }
        public int InstructorId { get; set; }
        public Instructor Instructor { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
