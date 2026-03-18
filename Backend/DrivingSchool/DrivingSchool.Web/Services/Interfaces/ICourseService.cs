using DrivingSchool.Web.Models;
namespace DrivingSchool.Web.Services.Interfaces
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetActiveCoursesAsync();
        Task<Course> GetByIdAsync(int id);
        Task CreateAsync(Course course);
        Task UpdateAsync(Course course);
        Task DeleteAsync(int id);
    }
}
