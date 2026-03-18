using DrivingSchool.Web.Data;
using DrivingSchool.Web.Models;
using Microsoft.EntityFrameworkCore;
using DrivingSchool.Web.Services.Interfaces;
using DrivingSchool.Web.Services.Implementations;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);
// DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequireNonAlphanumeric = false;
}).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
builder.Services.AddControllersWithViews();
// Register services
builder.Services.AddScoped<ICourseService, CourseService>();
builder.Services.AddScoped<IBookingService, BookingService>();
builder.Services.AddScoped<IPaymentService, FakePaymentService>();
var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllerRoute(
name: "default",
pattern: "{controller=Home}/{action=Index}/{id?}");
// Seed roles and admin
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    await SeedData.EnsureSeedData(services);
}
app.Run();
