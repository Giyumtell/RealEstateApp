using Microsoft.AspNetCore.Mvc;
using RealEstateAppAPI.Models;
using RealEstateAppAPI.Services;
using System.Threading.Tasks;

namespace RealEstateAppAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ListingController : ControllerBase
    {
        private readonly FirebaseService _firebaseService;

        public ListingController(FirebaseService firebaseService)
        {
            _firebaseService = firebaseService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateListing([FromBody] Listing listing)
        {
            var listingId = await _firebaseService.CreateListingAsync(listing);
            return CreatedAtAction(nameof(GetListing), new { id = listingId }, listing);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetListing(string id)
        {
            var listing = await _firebaseService.GetListingAsync(id);
            if (listing == null)
            {
                return NotFound();
            }
            return Ok(listing);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateListing(string id, [FromBody] Listing listing)
        {
            var existingListing = await _firebaseService.GetListingAsync(id);
            if (existingListing == null)
            {
                return NotFound();
            }
            await _firebaseService.UpdateListingAsync(id, listing);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListing(string id)
        {
            var existingListing = await _firebaseService.GetListingAsync(id);
            if (existingListing == null)
            {
                return NotFound();
            }
            await _firebaseService.DeleteListingAsync(id);
            return NoContent();
        }
    }
}