using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;

namespace RealEstate_WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalPropertiesController : ControllerBase
    {
        private readonly RealestateDbContext _context;

        public RentalPropertiesController(RealestateDbContext context)
        {
            _context = context;
        }

        // GET: api/RentalProperties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentalProperty>>> GetRentalProperties()
        {
            return await _context.RentalProperties.ToListAsync();
        }

        // GET: api/RentalProperties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentalProperty>> GetRentalProperty(int id)
        {
            var rentalProperty = await _context.RentalProperties.FindAsync(id);

            if (rentalProperty == null)
            {
                return NotFound();
            }

            return rentalProperty;
        }

        // PUT: api/RentalProperties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentalProperty(int id, RentalProperty rentalProperty)
        {
            if (id != rentalProperty.PropertyId)
            {
                return BadRequest();
            }

            _context.Entry(rentalProperty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalPropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RentalProperties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RentalProperty>> PostRentalProperty(RentalProperty rentalProperty)
        {
            _context.RentalProperties.Add(rentalProperty);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RentalPropertyExists(rentalProperty.PropertyId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRentalProperty", new { id = rentalProperty.PropertyId }, rentalProperty);
        }

        // DELETE: api/RentalProperties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRentalProperty(int id)
        {
            var rentalProperty = await _context.RentalProperties.FindAsync(id);
            if (rentalProperty == null)
            {
                return NotFound();
            }

            _context.RentalProperties.Remove(rentalProperty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RentalPropertyExists(int id)
        {
            return _context.RentalProperties.Any(e => e.PropertyId == id);
        }
    }
}
