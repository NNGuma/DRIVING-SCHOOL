
using Microsoft.AspNetCore.Mvc;

namespace DrivingSchool.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request.Email == "admin@test.com" && request.Password == "123456")
            {
                return Ok(new { token = "demo-jwt-token", user = request.Email });
            }

            return Unauthorized();
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] LoginRequest request)
        {
            return Ok(new { message = "User registered successfully" });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
