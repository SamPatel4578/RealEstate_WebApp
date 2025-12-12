using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;

namespace RealEstate_WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly RealestateDbContext _context;

        public PropertyController(RealestateDbContext context)
        {
            _context = context;
        }

        // GET: api/Property?type=sale | api/Property?type=rent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetProperties(
            [FromQuery] string type = "sale"
        )
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

                        // ✅ FIXED
                        bedrooms = rp.Property.Bedrooms.Any()
                            ? rp.Property.Bedrooms.Max(b => b.BedroomNo)
                            : 0,

                        bathrooms =
                            (rp.Property.BathroomsWithToilets ?? 0) +
                            (rp.Property.BathroomsOnly ?? 0),

                        carSpaces = rp.Property.CarSpaces.Sum(cs => cs.NumberOfSpaces)
                    })
                    .ToListAsync();

                return Ok(rentals);
            }

            // DEFAULT = SALE
            var sales = await _context.SalesProperties
                .Include(sp => sp.Property)
                    .ThenInclude(p => p.Bedrooms)
                .Include(sp => sp.Property)
                    .ThenInclude(p => p.CarSpaces)
                .Select(sp => new
                {
                    property = sp.Property,
                    salePrice = sp.SalePrice,

                    // ✅ FIXED
                    bedrooms = sp.Property.Bedrooms.Any()
                        ? sp.Property.Bedrooms.Max(b => b.BedroomNo)
                        : 0,

                    bathrooms =
                        (sp.Property.BathroomsWithToilets ?? 0) +
                        (sp.Property.BathroomsOnly ?? 0),

                    carSpaces = sp.Property.CarSpaces.Sum(cs => cs.NumberOfSpaces)
                })
                .ToListAsync();

            return Ok(sales);
        }
    }
}
