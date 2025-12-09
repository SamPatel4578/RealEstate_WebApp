using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;

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

        // REGISTER (PLAIN TEXT VERSION)
        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (await _context.Users.AnyAsync(x => x.Email == user.Email))
                return BadRequest("Email already exists.");

            // Store password as plain text (for now)
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Registration successful");
        }

        // LOGIN (PLAIN TEXT CHECK)
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest login)
        {
            Console.WriteLine($"RAW INPUT PASSWORD: '{login.Password}' LENGTH: {login.Password.Length}");

            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == login.Email);

            if (user == null)
                return Unauthorized("Invalid email");

            Console.WriteLine($"DB PASSWORD: '{user.Password}' LENGTH: {user.Password.Length}");

            if (user.Password != login.Password)
            {
                Console.WriteLine("MISMATCH!");
                return Unauthorized("Invalid password");
            }

            Console.WriteLine("MATCHED!");

            return Ok(new
            {
                message = "Login successful",
                role = user.Role,
                firstName = user.FirstName
            });
        }
    }

    // Login request DTO
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
