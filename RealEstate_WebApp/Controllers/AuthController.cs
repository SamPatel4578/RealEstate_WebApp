using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;
using System.Security.Cryptography;
using System.Text;

namespace RealEstate_WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly RealestateDbContext _context;

        public AuthController(RealestateDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (await _context.Users.AnyAsync(x => x.Email == user.Email))
                return BadRequest("Email already exists.");

            user.Password = HashPassword(user.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Registration successful");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest login)
        {
            var user = await _context.Users
                    .FirstOrDefaultAsync(x => x.Email == login.Email);

            if (user == null)
                return Unauthorized("Invalid email");

            if (user.Password != HashPassword(login.Password))
                return Unauthorized("Invalid password");

            return Ok(new
            {
                message = "Login successful",
                role = user.Role,
                firstName = user.FirstName
            });
        }

        private string HashPassword(string password)
        {
            using var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            return Convert.ToHexString(sha.ComputeHash(bytes));
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
