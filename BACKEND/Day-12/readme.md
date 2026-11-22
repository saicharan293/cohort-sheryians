# User Authentication API – Node.js & Express

## 1. Introduction

This project implements a basic user registration system using **Node.js, Express.js, MongoDB, JWT (JSON Web Token), and Cookies**.

It allows a new user to register using their name, email, and password.

After successful registration:
- The user's details are saved in MongoDB.
- A JWT (JSON Web Token) is generated.
- The JWT is stored in a browser cookie.
- A success response is sent to the client.

This project introduces some important backend concepts, including API routing, database operations, authentication, JWT generation, and cookie handling.

---

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Runs JavaScript on the server. |
| Express.js | Helps create APIs and handle HTTP requests. |
| MongoDB | Stores user information. |
| Mongoose | Helps interact with MongoDB using models. |
| JSON Web Token (JWT) | Creates a token to identify an authenticated user. |
| Cookie Parser | Reads cookies sent with incoming requests. |

---

## 3. Project Structure

```text
project/
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── app.js
│
├── .env
├── package.json
└── README.md
```

### Understanding the files

- `user.model.js` – Defines the structure of user data stored in MongoDB.
- `auth.routes.js` – Contains authentication-related API routes, such as registration.
- `app.js` – Creates the Express application and registers middleware and routes.
- `.env` – Stores environment variables such as the JWT secret.

---

## 4. Understanding the Application Setup

The `app.js` file creates and configures the Express application.

### Importing dependencies

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");
```

- `express` – Used to create the server and handle API requests.
- `cookie-parser` – Reads cookies from incoming requests and makes them available through `req.cookies`.

### Creating the Express application

```javascript
const app = express();
```

This creates an Express application that handles incoming HTTP requests.

### Importing the authentication router

```javascript
const authRouter = require("./routes/auth.routes");
```

This imports the authentication routes defined in `auth.routes.js`.

### Registering middleware

```javascript
app.use(express.json());
app.use(cookieParser());
```

**1. express.json()**

- Reads JSON data sent in the request body.
- Makes that data available through `req.body`.

For example, when the client sends:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

We can access the values using:

```javascript
req.body.name
req.body.email
req.body.password
```

**2. cookieParser()**

- Reads cookies sent by the browser.
- Makes them available through `req.cookies`.
- Helps the server access cookies from incoming requests.

### Registering the authentication routes

```javascript
app.use("/api/auth", authRouter);
```

This tells Express to use `authRouter` whenever a request starts with `/api/auth`.

For example:

| Router path | Complete API endpoint |
|---|---|
| `/register` | `/api/auth/register` |

### Exporting the application

```javascript
module.exports = app;
```

This allows another file, such as `server.js`, to import and start the application.

---

## 5. Understanding the Registration API

The registration route is defined inside `auth.routes.js`.

```javascript
authRouter.post("/register", async (req, res) => {
    // Registration logic
});
```

### Why POST?

We use the HTTP `POST` method because registration involves sending new user data to the server and creating a new user record.

### Step 1: Extracting user details

```javascript
const { email, name, password } = req.body;
```

This extracts the email, name, and password from the request body.

This is called **object destructuring** in JavaScript.

### Step 2: Checking whether the user already exists

```javascript
const doesUserAlreadyExists = await userModel.findOne({ email });
```

- `findOne()` searches the database for a user matching the given email.
- If a matching user exists, it returns that user.
- If no matching user exists, it returns `null`.
- `await` waits for the database operation to finish.

This prevents registering another account with an already-used email address.

### Step 3: Handling an existing user

```javascript
if (doesUserAlreadyExists) {
    return res.status(409).json({
        message: "User with this email address already exists."
    });
}
```

- `409` means Conflict.
- It tells the client that the requested operation conflicts with existing data.
- `return` stops the function so that a duplicate account is not created.

### Step 4: Creating a new user

```javascript
const newUser = await userModel.create({
    email,
    password,
    name
});
```

- `create()` creates a new document in MongoDB.
- The user details are saved using the schema defined in `user.model.js`.
- The newly created user is returned.

**Important:** Passwords should be hashed using a library such as `bcrypt` before saving them. Never store plain-text passwords.

### Step 5: Generating a JWT

```javascript
const token = jwt.sign(
    {
        id: newUser._id
    },
    process.env.JWT_SECRET
);
```

A JWT is a token that can be used to identify a user across requests.

Here:

- `jwt.sign()` creates a new token.
- `newUser._id` identifies the registered user.
- `process.env.JWT_SECRET` is a secret key used to sign the token.

The server can later verify this token to check whether it was created using the correct secret and has not been modified.

### Step 6: Storing the JWT in a cookie

```javascript
res.cookie("jwt_token", token);
```

This sends a cookie named `jwt_token` to the browser.

The browser can store this cookie and automatically send it with future requests when cookie rules allow.

This allows the server to receive the token without requiring the client to manually attach it to every request.

### Step 7: Sending the response

```javascript
res.status(201).json({
    message: "user registered successfully",
    newUser,
    token
});
```

- `201` means Created.
- It indicates that the user was successfully registered.
- `json()` sends a JSON response to the client.

**Security note:** Do not return the user's password in the response. Also, if you use an HTTP-only cookie for authentication, there is generally no need to return the JWT separately in the response body.

---

## 6. Understanding the Complete Registration Flow

When a user registers, the following steps take place:

1. The client sends a POST request to `/api/auth/register`.
2. Express receives the request.
3. `express.json()` reads the incoming JSON data.
4. The registration route extracts the user's details.
5. MongoDB is checked to see whether the email already exists.
6. If the user exists, the server returns a `409 Conflict` response.
7. Otherwise, a new user is created in MongoDB.
8. A JWT is generated using the user's ID.
9. The JWT is sent to the browser as a cookie.
10. The server returns a `201 Created` response.

---

## 7. API Documentation

### Register a new user

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | `/api/auth/register` |
| Content-Type | `application/json` |
| Purpose | Register a new user |

**Request body:**

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

**Successful response – 201 Created:**

```json
{
  "message": "user registered successfully",
  "newUser": {
    "_id": "USER_ID",
    "name": "John",
    "email": "john@example.com"
  },
  "token": "JWT_TOKEN"
}
```

The exact response depends on the fields included in your Mongoose schema and the fields you choose to return.

**Duplicate email response – 409 Conflict:**

```json
{
  "message": "User with this email address already exists."
}
```

---

## 8. Important Concepts to Learn

### 1. Middleware

Middleware is a function that runs during the request-response process.

Examples in this project:

- `express.json()` – Reads JSON request data.
- `cookieParser()` – Reads incoming cookies.

Middleware helps process requests before they reach the route handler.

### 2. Async and Await

Database operations take time.

`async` and `await` allow us to write asynchronous code in a way that is easier to read.

```javascript
const user = await userModel.findOne({ email });
```

The code waits for the database operation to complete before moving to the next step.

### 3. JWT Authentication

JWT stands for JSON Web Token.

It is used to identify users after they authenticate.

A JWT generally consists of three parts:

- Header – Contains token information.
- Payload – Contains data such as the user ID.
- Signature – Helps verify that the token has not been modified.

Remember: A JWT is signed, not encrypted by default. Do not store passwords or sensitive information inside its payload.

### 4. Cookies

Cookies are small pieces of data stored by the browser.

They can be used to store authentication tokens and other information.

Unlike `localStorage` and `sessionStorage`, cookies can be automatically included in HTTP requests when their settings allow it.

### 5. HTTP Status Codes

| Status code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

---

## 9. Important Improvements for Production

The current implementation demonstrates the registration flow. Before using it in a real application, consider these improvements:

- **Password hashing:** Use `bcrypt` to hash passwords before saving them.
- **Input validation:** Validate name, email, and password before creating a user.
- **Duplicate email protection:** Add a unique index to the email field in MongoDB.
- **JWT expiration:** Set an expiration time using the `expiresIn` option.
- **HTTP-only cookies:** Set `httpOnly: true` to prevent JavaScript from reading the authentication cookie.
- **Secure cookies:** Use `secure: true` in production over HTTPS.
- **SameSite protection:** Configure the `sameSite` cookie option to help protect against CSRF attacks.
- **Error handling:** Use `try/catch` to handle database and JWT errors.
- **Sensitive data:** Never return passwords or password hashes in API responses.
- **Environment variables:** Keep secrets in `.env` and never commit them to GitHub.

---

## 10. Key Takeaways

By understanding this implementation, you learn:

- How to create an Express application.
- How to organize routes using Express Router.
- How to receive and process JSON request data.
- How to connect API routes with MongoDB models.
- How to check whether a user already exists.
- How to create a new database record.
- How to generate a JWT.
- How to store a JWT in a browser cookie.
- How middleware works in Express.
- How HTTP status codes communicate API results.

---

## 11. What's Next?

After understanding registration, the natural next steps are:

1. **Login API** – Verify the user's email and password.
2. **Password Hashing** – Secure passwords using bcrypt.
3. **JWT Verification** – Verify the token on protected routes.
4. **Authentication Middleware** – Restrict access to authenticated users.
5. **Logout API** – Clear the authentication cookie.
6. **Protected Routes** – Allow only authenticated users to access certain resources.

The goal is to understand how each part works together rather than simply memorizing the code.