# User Authentication – Register & JWT Cookie

## Overview

This module handles new user registration and generates a JWT (JSON Web Token) after successful registration.

It also demonstrates how authentication tokens can be stored in browser cookies and accessed by the server in subsequent requests.

## Features

- **User Registration:** Accepts the user's name, email, and password.
- **Duplicate Email Check:** Checks whether an account already exists with the provided email before creating a new user.
- **User Creation:** Stores the new user's details in MongoDB using the User Model.
- **JWT Generation:** Creates a token containing the user's ID and email after successful registration.
- **Cookie Storage:** Stores the generated JWT in a cookie named `jwt_token`.
- **Cookie Reading:** Includes a test route to inspect cookies received from the client.

## API Endpoints

### 1. Register User

`POST /api/auth/register`

**Request Body:**

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123"
}
```

**Process:**

1. Receives registration details from the client.
2. Checks MongoDB for an existing account with the same email.
3. Creates a new user if no matching account exists.
4. Generates a JWT using the user's ID and email.
5. Stores the JWT in the response cookie.
6. Returns a success message and user details.

**Possible Responses:**

- `201 Created` – User registered successfully.
- `409 Conflict` – An account already exists with the provided email.

### 2. Test Protected Route

`POST /api/auth/protected`

**Process:**

1. Receives a request from the client.
2. Reads cookies attached to the incoming request.
3. Logs the received cookies in the server console.
4. Returns the cookies in the response for testing.

This endpoint currently tests cookie handling. It does not yet verify the JWT or restrict access to authenticated users.

## Concepts Involved

| Concept | Purpose |
|---|---|
| Express Router | Keeps authentication endpoints organized separately from the main application. |
| Async/Await | Handles database operations without blocking the request flow. |
| Mongoose `findOne()` | Checks whether an email is already registered. |
| Mongoose `create()` | Creates a new user document in MongoDB. |
| JWT (`jwt.sign()`) | Creates a token that identifies the registered user. |
| `res.cookie()` | Sends the JWT to the client through a cookie. |
| `req.cookies` | Reads cookies sent by the client in subsequent requests. |
| HTTP Status Codes | Communicates registration success or failure. |

## Real-World Application

Consider an e-commerce application:

- A customer registers with their name, email, and password.
- The backend creates their account and generates a JWT.
- The JWT is stored in a browser cookie.
- When the customer visits their profile or orders page, the browser sends the cookie with the request.
- The backend can use that token to identify the customer and determine whether they are authenticated.

## Current Implementation vs Next Step

The current implementation covers registration and JWT cookie creation. The next step is to introduce JWT verification middleware.

That middleware will:
- Read the `jwt_token` cookie.
- Verify the token using `JWT_SECRET`.
- Identify the authenticated user.
- Allow or reject access to protected routes.

**Important security improvements before production:**
- Hash passwords before storing them (for example, using bcrypt).
- Use `httpOnly`, `secure`, and an appropriate `sameSite` setting for authentication cookies.
- Avoid returning passwords or sensitive user information in API responses.
- Stop registration execution immediately when a duplicate email is found.
- Validate incoming registration data.

---

**Key Takeaway:** Registration creates the user account; JWT generation establishes the user's identity for future requests; cookies provide a convenient way to send that token back to the server.

## 3. User Login

`POST /api/auth/login`

**Purpose:**

Allows an already registered user to log in using their email and password.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Process:**

1. Receives the user's email and password.
2. Searches MongoDB for an account matching the provided email.
3. Returns `404 Not Found` if no matching user exists.
4. Compares the submitted password with the stored password.
5. Returns `401 Unauthorized` if the password doesn't match.
6. Generates a JWT containing the user's ID after successful authentication.
7. Stores the generated JWT in a cookie named `jwt_token`.
8. Returns a login success message along with the user's details.

**Possible Responses:**

- `200 OK` – User logged in successfully.
- `404 Not Found` – No account exists with the provided email.
- `401 Unauthorized` – Incorrect password.

**Concepts Involved:**

| Concept | Purpose |
|---|---|
| Mongoose `findOne()` | Retrieves the registered user using their email. |
| Password Comparison | Checks whether the submitted password matches the stored password. |
| JWT (`jwt.sign()`) | Generates a token to identify the logged-in user. |
| `res.cookie()` | Stores the generated JWT in a response cookie. |
| HTTP Status Codes | Communicates login success and authentication failures. |

**Real-World Application:**

In an e-commerce application, a registered customer enters their email and password to log in. Once authenticated, the backend generates a JWT and sends it through a cookie. This allows subsequent requests to carry the user's authentication token.

**Key Takeaway:** Registration creates an account, whereas login verifies an existing account and generates a fresh authentication token for the user.