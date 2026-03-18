using DrivingSchool.Web.Models;
using DrivingSchool.Web.Services.Interfaces;
using DrivingSchool.Web.Data;
namespace DrivingSchool.Web.Services.Implementations
{
    public class FakePaymentService : IPaymentService
    {
        private readonly ApplicationDbContext _db;
        public FakePaymentService(ApplicationDbContext db) { _db = db; }
        public async Task<Payment> InitiatePaymentAsync(decimal amount, string userId, PaymentMethod method)
        {
            var p = new Payment
            {
                Amount = amount,
                Method = method,
                Status = PaymentStatus.Completed,
                TransactionRef = Guid.NewGuid().ToString(),
                PayerId = userId
            };
            _db.Payments.Add(p);
            await _db.SaveChangesAsync();
            return p;
        }
        public Task<Payment> ConfirmPaymentAsync(string transactionRef)
        {
            var p = _db.Payments.FirstOrDefault(x => x.TransactionRef ==
            transactionRef);
            return Task.FromResult(p);
        }
    }
}
