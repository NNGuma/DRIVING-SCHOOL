using DrivingSchool.Web.Data;
using DrivingSchool.Web.Models;
using DrivingSchool.Web.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
namespace DrivingSchool.Web.Services.Implementations
{
    public class CourseService : ICourseService
    {
        private readonly ApplicationDbContext _db;
        public CourseService(ApplicationDbContext db) => _db = db;
        public async Task CreateAsync(Course course)
        {
            _db.Courses.Add(course);
            await _db.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var c = await
        _db.Courses.FindAsync(id); if (c != null)
            {
                _db.Courses.Remove(c); await
        _db.SaveChangesAsync();
            }
        }
        public Task<Course> GetByIdAsync(int id) =>
        _db.Courses.FindAsync(id).AsTask();
        public Task<IEnumerable<Course>> GetActiveCoursesAsync() =>
        Task.FromResult(_db.Courses.Where(c => c.IsActive).AsEnumerable());
        public async Task UpdateAsync(Course course)
        {
            _db.Courses.Update(course); await _db.SaveChangesAsync();
        }
    }
}
