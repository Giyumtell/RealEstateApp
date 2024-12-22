using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using RealEstateAppAPI.Models;

namespace RealEstateAppAPI.Services{
    public class FirebaseService
{
    private readonly FirebaseAuth _auth;
    private readonly FirestoreDb _firestoreDb;

    public FirebaseService(IConfiguration configuration)
    {
        FirebaseApp.Create(new AppOptions()
        {
            Credential = GoogleCredential.FromFile(configuration["Firebase:CredentialsPath"])
        });

        _auth = FirebaseAuth.DefaultInstance;
        _firestoreDb = FirestoreDb.Create(configuration["Firebase:ProjectId"]);
    }

    public async Task<string> CreateUserAsync(string email, string password)
    {
        var userRecordArgs = new UserRecordArgs()
        {
            Email = email,
            EmailVerified = false,
            Password = password,
            Disabled = false,
        };

        UserRecord userRecord = await _auth.CreateUserAsync(userRecordArgs);
        return userRecord.Uid;
    }

    public async Task<UserRecord> GetUserAsync(string uid)
    {
        return await _auth.GetUserAsync(uid);
    }

    public async Task<string> CreateListingAsync(Listing listing)
    {
        DocumentReference docRef = _firestoreDb.Collection("listings").Document();
        listing.Id = docRef.Id;
        await docRef.SetAsync(listing);
        return listing.Id;
    }

    public async Task<Listing> GetListingAsync(string id)
    {
        DocumentReference docRef = _firestoreDb.Collection("listings").Document(id);
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
        if (snapshot.Exists)
        {
            return snapshot.ConvertTo<Listing>();
        }
        return null;
    }

    public async Task UpdateListingAsync(string id, Listing listing)
    {
        DocumentReference docRef = _firestoreDb.Collection("listings").Document(id);
        await docRef.SetAsync(listing, SetOptions.Overwrite);
    }

    public async Task DeleteListingAsync(string id)
    {
        DocumentReference docRef = _firestoreDb.Collection("listings").Document(id);
        await docRef.DeleteAsync();
    }
}
}