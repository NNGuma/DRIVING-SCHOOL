using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using DrivingSchool.Web.Models;

namespace DrivingSchool.Web.Data
{
    public static class SeedData
    {
        public static async Task EnsureSeedData(IServiceProvider serviceProvider)
        {
            var roleManager =
            serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            var userManager =
            serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            string[] roles = new[] { "Admin", "Instructor", "Student" };

            foreach (var r in roles)
                if (!await roleManager.RoleExistsAsync(r))
                    await roleManager.CreateAsync(new IdentityRole(r));

            var adminEmail = "admin@drivingschool.local";

            var admin = await userManager.FindByEmailAsync(adminEmail);

            if (admin == null)
            {
                admin = new ApplicationUser
                {
                    Email = adminEmail,
                    UserName = adminEmail,
                    FullName = "System Admin",
                    IDNumber = "0000000000000"
                };

                await userManager.CreateAsync(admin, "Admin123!");
                await userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }
}
