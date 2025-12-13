using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;

namespace RealEstate_WebApp.Controllers
{
    [ApiController]
    [Route("api/property")]
    public class PropertyController : ControllerBase
    {
        private readonly RealestateDbContext _context;

        public PropertyController(RealestateDbContext context)
        {
            _context = context;
        }

        // --------------------------------------------------
        // GET: api/property?type=sale | type=rent
        // --------------------------------------------------
        [HttpGet("")]
        public async Task<IActionResult> GetProperties([FromQuery] string type = "sale")
        {
            if (type.ToLower() == "rent")
            {
                var rentals = await _context.RentalProperties
                    .Include(rp => rp.Property)
                        .ThenInclude(p => p.Bedrooms)
                    .Include(rp => rp.Property)
                        .ThenInclude(p => p.CarSpaces)
                    .Select(rp => new
                    {
                        property = rp.Property,
                        rent = rp.Rent,

                        bedrooms = rp.Property.Bedrooms.Any()
                            ? rp.Property.Bedrooms.Max(b => b.BedroomNo)
                            : 0,

                        bathrooms = rp.Property.BathroomsWithToilets ?? 0,

                        carSpaces = rp.Property.CarSpaces.Sum(cs => cs.NumberOfSpaces)
                    })
                    .ToListAsync();

                return Ok(rentals);
            }

            var sales = await _context.SalesProperties
                .Include(sp => sp.Property)
                    .ThenInclude(p => p.Bedrooms)
                .Include(sp => sp.Property)
                    .ThenInclude(p => p.CarSpaces)
                .Select(sp => new
                {
                    property = sp.Property,
                    salePrice = sp.SalePrice,

                    bedrooms = sp.Property.Bedrooms.Any()
                        ? sp.Property.Bedrooms.Max(b => b.BedroomNo)
                        : 0,

                    bathrooms = sp.Property.BathroomsWithToilets ?? 0,

                    carSpaces = sp.Property.CarSpaces.Sum(cs => cs.NumberOfSpaces)
                })
                .ToListAsync();

            return Ok(sales);
        }

        // --------------------------------------------------
        // GET: api/property/1997   ✅ THIS WAS MISSING/BROKEN
        // --------------------------------------------------
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetPropertyById(int id)
        {
            var property = await _context.Properties
                .Include(p => p.Bedrooms)
                .Include(p => p.CarSpaces)
                .FirstOrDefaultAsync(p => p.PropertyId == id);

            if (property == null)
                return NotFound($"Property {id} not found");

            var sale = await _context.SalesProperties
                .FirstOrDefaultAsync(sp => sp.PropertyId == id);

            var rent = await _context.RentalProperties
                .FirstOrDefaultAsync(rp => rp.PropertyId == id);

            return Ok(new
            {
                property,

                salePrice = sale?.SalePrice,
                rent = rent?.Rent,

                bedrooms = property.Bedrooms.Any()
                    ? property.Bedrooms.Max(b => b.BedroomNo)
                    : 0,

                bathrooms = property.BathroomsWithToilets ?? 0,

                carSpaces = property.CarSpaces.Sum(cs => cs.NumberOfSpaces)
            });
        }
    }
}
