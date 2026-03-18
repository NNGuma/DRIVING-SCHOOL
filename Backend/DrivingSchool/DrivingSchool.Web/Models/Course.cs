namespace DrivingSchool.Web.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int DurationHours { get; set; }
        public decimal Price { get; set; }
        public bool IsActive { get; set; } = true;
    }
}