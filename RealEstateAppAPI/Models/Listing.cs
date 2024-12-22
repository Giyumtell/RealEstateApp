// filepath: RealEstateAppAPI/Models/Listing.cs
using System.ComponentModel.DataAnnotations;

namespace RealEstateAppAPI.Models
{
    public class Listing
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Address { get; set; }

        [Required]
        public decimal Price { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        public int Bedrooms { get; set; }

        [Required]
        public int Bathrooms { get; set; }

        [Required]
        public int SquareFootage { get; set; }

        public string ImageUrl { get; set; }
    }
}