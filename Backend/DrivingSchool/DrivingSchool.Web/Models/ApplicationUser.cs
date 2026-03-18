using Microsoft.AspNetCore.Identity;
namespace DrivingSchool.Web.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
        public string IDNumber { get; set; }
    }
}