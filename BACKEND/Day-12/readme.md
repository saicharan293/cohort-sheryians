# User Registration – Authentication Module

This module implements a basic user registration system using **Node.js, Express.js, and MongoDB (Mongoose)**.

## 1. User Model (`user.model.js`)

Defines the structure of user information stored in MongoDB.

- Stores user details such as name, email, and password.
- Uses Mongoose to define the user schema.
- Ensures that each email address is unique to prevent duplicate accounts.
- Exports the `users` model for database operations.

## 2. Authentication Routes (`auth.routes.js`)

Handles incoming user registration requests.

- Defines the registration endpoint: `POST /api/auth/register`.
- Accepts name, email, and password through the request body.
- Checks whether a user with the provided email already exists.
- Returns `409 Conflict` if the email is already registered.
- Creates a new user record if the email is not found.
- Returns `201 Created` along with a success message and the newly created user details.

## 3. Express Application (`app.js`)

Sets up the main Express application and connects the authentication routes.

- Initializes the Express application.
- Enables JSON request-body parsing using `express.json()`.
- Imports the authentication router.
- Registers authentication routes under the `/api/auth` base path.
- Exports the application for use by the server entry point.

## 4. Registration Flow

1. The client sends a registration request with name, email, and password.
2. Express reads the JSON request body.
3. The authentication route checks whether the email already exists.
4. If the email exists, the API returns a conflict response.
5. Otherwise, a new user is created in MongoDB.
6. The API returns a success response with the newly created user details.

## 5. API Reference

| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | 201 |
| POST | `/api/auth/register` | Email already exists | 409 |

**Note:** This implementation currently stores passwords as plain text. Password hashing and excluding passwords from API responses should be implemented before using this module in production.