namespace RealEstateAppAPI.Models
{
    public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public byte[] PasswordHash { get; set; }
}
}