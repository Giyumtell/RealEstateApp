# my-aspnetcore-jwt-app

This is an ASP.NET Core application that implements JWT authentication. The application provides a secure way to manage user authentication and authorization using JSON Web Tokens.

## Project Structure

- **Controllers**
  - `AuthController.cs`: Handles user authentication requests, including login and registration.
  
- **Models**
  - `User.cs`: Represents the user entity with properties such as Id, Username, and PasswordHash.
  
- **Services**
  - `AuthService.cs`: Contains the authentication logic, including JWT token generation and user credential validation.
  
- **Configuration**
  - `appsettings.json`: Configuration settings for the application, including JWT settings like the secret key and token expiration time.
  
- **Entry Point**
  - `Program.cs`: The entry point of the application that sets up the web application and configures services.
  
- **Startup**
  - `Startup.cs`: Configures services and middleware for the application, including JWT authentication and CORS.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-aspnetcore-jwt-app
   ```

2. Install the required packages:
   ```
   dotnet restore
   ```

3. Update the `appsettings.json` file with your JWT secret key and other settings.

4. Run the application:
   ```
   dotnet run
   ```

## Usage Examples

- **Register a User**
  - Endpoint: `POST /api/auth/register`
  - Body: `{ "username": "example", "password": "password" }`

- **Login a User**
  - Endpoint: `POST /api/auth/login`
  - Body: `{ "username": "example", "password": "password" }`
  - Response: Returns a JWT token upon successful authentication.

## License

This project is licensed under the MIT License.