# User Authentication API

## Overview
A basic authentication system built using Node.js, Express.js, MongoDB, and JWT. It supports user registration, login, password hashing, and cookie handling.

## Features

- **User Registration:** Creates a new account after checking whether the email is already registered.
- **Password Hashing:** Converts passwords into MD5 hashes before storing them in MongoDB.
- **User Login:** Verifies the submitted credentials by comparing password hashes.
- **JWT Generation:** Generates authentication tokens after successful registration or login.
- **Cookie Management:** Stores JWT tokens in browser cookies using `res.cookie()`.
- **Cookie Reading:** Reads incoming cookies using `req.cookies`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Registers a new user |
| POST | `/api/auth/login` | Logs in an existing user |
| POST | `/api/auth/protected` | Tests cookie handling |

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Node.js Crypto Module
- Cookie Parser

## Authentication Flow

1. User submits registration details.
2. Backend checks whether the email already exists.
3. Password is converted into an MD5 hash before saving.
4. A JWT is generated after successful registration.
5. During login, the submitted password is hashed and compared with the stored hash.
6. If credentials match, a new JWT is generated and stored in a cookie.

## Current Scope

User registration, login, MD5 password hashing, JWT generation, and cookie handling are implemented.

JWT verification middleware and actual protected-route authorization are yet to be implemented.

## Security Note

MD5 is not suitable for storing passwords in production because it is fast and vulnerable to brute-force attacks. Use bcrypt or Argon2 with appropriate password-hashing settings for real-world applications.