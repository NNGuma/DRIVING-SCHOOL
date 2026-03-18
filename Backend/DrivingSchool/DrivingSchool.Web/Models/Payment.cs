namespace DrivingSchool.Web.Models
{
    public enum PaymentMethod { Card, EFT, MobileMoney }
    public enum PaymentStatus { Initiated, Completed, Failed, Refunded }
    public class Payment
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public PaymentMethod Method { get; set; }
        public PaymentStatus Status { get; set; }
        public string TransactionRef { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string PayerId { get; set; }
    }
}
