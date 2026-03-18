namespace DrivingSchool.Web.Models
{
    public class Instructor
    {
        public int Id { get; set; }
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string LicenseNumber { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
