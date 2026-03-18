using DrivingSchool.Web.Data;
using DrivingSchool.Web.Models;
using DrivingSchool.Web.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
namespace DrivingSchool.Web.Services.Implementations
{
    public class BookingService : IBookingService
    {
        private readonly ApplicationDbContext _db;
        public BookingService(ApplicationDbContext db) { _db = db; }
        public async Task<IEnumerable<DateTime>> GetAvailableSlotsAsync(int
        courseId, int instructorId, DateTime from, DateTime to)
        {
            var avail = await _db.InstructorAvailabilities
            .Where(a => a.InstructorId == instructorId && a.End >= from &&
            a.Start <= to)
            .ToListAsync();
            var bookings = await _db.Bookings
            .Where(b => b.InstructorId == instructorId && b.Status !=
            BookingStatus.Cancelled && b.Start < to && b.End > from)
            .ToListAsync();
            var slots = new List<DateTime>();
            foreach (var a in avail)
            {
                var slotStart = a.Start < from ? from : a.Start;
                while (slotStart.AddHours(1) <= a.End && slotStart < to)
                {
                    var slotEnd = slotStart.AddHours(1);
                    bool conflict = bookings.Any(b => b.Start < slotEnd &&
                    b.End > slotStart);
                    if (!conflict) slots.Add(slotStart);
                    slotStart = slotStart.AddHours(1);
                }
            }
            return slots.OrderBy(s => s);
        }
        public async Task<Booking> CreateBookingAsync(Booking booking)
        {
            using var tx = await _db.Database.BeginTransactionAsync();
            try
            {
                var conflicting = await _db.Bookings.AnyAsync(b => b.InstructorId == booking.InstructorId && b.Start < booking.End && b.End > booking.Start && b.Status != BookingStatus.Cancelled);
                if (conflicting) throw new InvalidOperationException("Selected time slot is no longer available.");
                _db.Bookings.Add(booking);
                await _db.SaveChangesAsync();
                await tx.CommitAsync();
                return booking;
            }
            catch
            {
                await tx.RollbackAsync();
                throw;
            }
        }
        public async Task<bool> CancelBookingAsync(int bookingId, string userId)
        {
            var booking = await _db.Bookings.FindAsync(bookingId);
            if (booking == null) return false;
            if (booking.StudentId != userId) throw new
            UnauthorizedAccessException();
            booking.Status = BookingStatus.Cancelled;
            await _db.SaveChangesAsync();
            return true;
        }
        public Task<IEnumerable<Booking>> GetUserBookingsAsync(string userId)
        {
            var q = _db.Bookings.Include(b => b.Course).Where(b => b.StudentId
            == userId).AsEnumerable();
            return Task.FromResult(q);
        }
    }
}