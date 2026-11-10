# Express.js – Notes REST API

## 1. Project Overview

A basic REST API built using **Node.js and Express.js** to understand server creation, middleware, HTTP methods, JSON handling, and REST API concepts.

This project allows clients to create and retrieve notes using POST and GET requests.

## 2. What is express.json()?

```javascript
app.use(express.json());
```

- Built-in Express middleware.
- Parses incoming JSON request bodies into JavaScript objects.
- Makes the parsed data accessible through `req.body`.
- Without it, `req.body` may be undefined for JSON requests.

## 3. What is an API?

API (Application Programming Interface) allows two applications to communicate with each other.

In this project, the Express server provides endpoints through which clients can send and receive notes.

## 4. What is REST?

REST (Representational State Transfer) is an architectural style used to design APIs.

**Where is it used?**
- Connecting frontend applications with backend servers.
- Mobile applications communicating with APIs.
- Building web services.

**Why is it used?**
- Provides standard communication using HTTP.
- Makes APIs easier to maintain and scale.
- Uses HTTP methods to perform operations on resources.

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data |
| PUT | Update data |
| PATCH | Partially update data |
| DELETE | Delete data |

## 5. What is Statelessness?

Statelessness is an important REST constraint.

- Every request is independent.
- Each request contains the information required to process it.
- The server does not maintain client session state between requests.

**Why is it used?**
- Makes APIs easier to scale.
- Allows different servers to handle requests.
- Reduces dependency between requests.

**Note:** Stateless does not mean the server cannot store application data. Here, notes are stored in a JavaScript array.

## 6. Sessions and JWT

Both Sessions and JWT are used for user authentication, but they manage authentication differently.

### Session-Based Authentication

- Server creates a session after successful login.
- Session information is stored on the server.
- Client receives a session ID, usually through a cookie.
- Client sends the session ID with subsequent requests.
- Server identifies the user using the stored session.

**Session authentication is generally stateful** because the server maintains session information.

### JWT (JSON Web Token)

- Server generates a signed token after successful login.
- Client stores the token and sends it with subsequent requests.
- Server verifies the token to authenticate the user.
- No separate server-side session is required for each user.

**JWT can support stateless authentication** because the server can verify each request independently.

Example:

```http
GET /notes
Authorization: Bearer <token>
```

### Session vs JWT

| Session | JWT |
|---|---|
| Data stored on server. | Claims stored in token. |
| Client sends session ID. | Client sends JWT. |
| Server looks up session. | Server verifies token. |
| Generally stateful. | Can be stateless. |

### Relationship Between REST, Statelessness, Sessions and JWT

- **REST:** Defines how APIs communicate.
- **Statelessness:** Ensures requests are independent.
- **Session:** Maintains user state on the server.
- **JWT:** Carries signed authentication information and can support stateless REST APIs.

**Real-world example:** In an e-commerce application, REST APIs handle products and orders, while JWT or sessions authenticate users accessing those resources.

## 7. API Endpoints

### POST – Create a Note

`POST /notes`

- Accepts JSON data from the client.
- Uses `req.body` to access the data.
- Stores the note in the `notes` array.
- Sends a response message.

### GET – Retrieve Notes

`GET /notes`

- Retrieves all notes from the array.
- Returns the notes as a JSON response.

## 8. Basic Server Code

```javascript
const express = require('express');

const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.send("first api");
});

app.get("/notes", (req, res) => {
    console.log(notes);
    res.send(notes);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
```

## 9. Installation and Execution

**Initialize project (optional but recommended):**

```bash
npm init -y
```

**Install Express:**

```bash
npm install express
```

**Run the server:**

```bash
node index.js
```

Server URL: http://localhost:3000

**Note:** Modern npm versions generally create a `package.json` automatically when installing Express, even if `npm init -y` was not explicitly executed. The latter initializes the project explicitly before installation.

## 10. Key Takeaways

- Node.js allows JavaScript to run outside the browser.
- Express.js helps build web servers and REST APIs.
- `express.json()` parses incoming JSON data.
- `req.body` accesses parsed request data.
- REST uses HTTP methods to interact with resources.
- Statelessness makes API requests independent.
- Sessions maintain server-side user state.
- JWT supports token-based, potentially stateless authentication.
- `app.listen()` starts the server.
- Notes are stored in memory and disappear when the server restarts.

**Conclusion:** This project introduces Express.js and REST API development while building an understanding of middleware, HTTP communication, statelessness, and authentication concepts.