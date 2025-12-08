namespace RealEstate_WebApp.Models
{
    public class User
    {
        public int UserId { get; set; }  // PK
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? Dob { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } 
        public string Role { get; set; }       // "customer" or "owner"
    }
}
