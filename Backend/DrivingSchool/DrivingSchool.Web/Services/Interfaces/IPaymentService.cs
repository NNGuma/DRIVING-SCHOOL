
using DrivingSchool.Web.Models;
namespace DrivingSchool.Web.Services.Interfaces
{
    public interface IPaymentService
    {
        Task<Payment> InitiatePaymentAsync(decimal amount, string userId, PaymentMethod method);
        Task<Payment> ConfirmPaymentAsync(string transactionRef);
    }
}
