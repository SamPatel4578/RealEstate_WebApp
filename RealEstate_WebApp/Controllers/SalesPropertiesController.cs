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
    public class SalesPropertiesController : ControllerBase
    {
        private readonly RealestateDbContext _context;

        public SalesPropertiesController(RealestateDbContext context)
        {
            _context = context;
        }

        // GET: api/SalesProperties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesProperty>>> GetSalesProperties()
        {
            return await _context.SalesProperties
                .Include(p => p.Property)
                .ToListAsync();
        }


        // GET: api/SalesProperties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesProperty>> GetSalesProperty(int id)
        {
            var salesProperty = await _context.SalesProperties.FindAsync(id);

            if (salesProperty == null)
            {
                return NotFound();
            }

            return salesProperty;
        }

        // PUT: api/SalesProperties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesProperty(int id, SalesProperty salesProperty)
        {
            if (id != salesProperty.PropertyId)
            {
                return BadRequest();
            }

            _context.Entry(salesProperty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesPropertyExists(id))
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

        // POST: api/SalesProperties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SalesProperty>> PostSalesProperty(SalesProperty salesProperty)
        {
            _context.SalesProperties.Add(salesProperty);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SalesPropertyExists(salesProperty.PropertyId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSalesProperty", new { id = salesProperty.PropertyId }, salesProperty);
        }

        // DELETE: api/SalesProperties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalesProperty(int id)
        {
            var salesProperty = await _context.SalesProperties
                .Include(p => p.Property)
                .FirstOrDefaultAsync(p => p.PropertyId == id);

            if (salesProperty == null)
            {
                return NotFound();
            }

            _context.SalesProperties.Remove(salesProperty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalesPropertyExists(int id)
        {
            return _context.SalesProperties.Any(e => e.PropertyId == id);
        }
    }
}
