using DrivingSchool.Web.Models;
namespace DrivingSchool.Web.Services.Interfaces
{
    public interface IBookingService
    {
        Task<IEnumerable<DateTime>> GetAvailableSlotsAsync(int courseId, int
        instructorId, DateTime from, DateTime to);
        Task<Booking> CreateBookingAsync(Booking booking);
        Task<bool> CancelBookingAsync(int bookingId, string userId);
        Task<IEnumerable<Booking>> GetUserBookingsAsync(string userId);
    }
}
