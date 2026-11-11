# Express.js – Notes API (CRUD Operations)

## About the Project

A simple REST API built using **Node.js** and **Express.js** to perform CRUD operations on notes.

This project demonstrates how to create API endpoints, handle JSON data, and use route parameters.

## Concepts Covered

- **Node.js:** JavaScript runtime used to run JavaScript outside the browser.
- **Express.js:** Framework for building web servers and APIs.
- **REST API:** Allows applications to communicate using HTTP methods.
- **express.json():** Middleware that parses incoming JSON request bodies.
- **req.body:** Accesses data sent by the client.
- **req.params:** Accesses dynamic values from the URL.
- **CRUD:** Create, Read, Update, and Delete operations.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes` | Create a new note |
| GET | `/notes` | Get all notes |
| DELETE | `/notes/:idx` | Delete a note by index |
| PATCH | `/notes/:idx` | Update a note's description |

## Example Requests

### 1. Create a Note

**POST** `/notes`

Request body:

```json
{
  "title": "First Note",
  "description": "This is my first note"
}
```

### 2. Get All Notes

**GET** `/notes`

Returns all stored notes.

### 3. Delete a Note

**DELETE** `/notes/0`

Deletes the note at index `0`.

### 4. Update a Note

**PATCH** `/notes/0`

Request body:

```json
{
  "description": "Updated note description"
}
```

## How to Run

1. Install dependencies:

```bash
npm install express
```

2. Start the server:

```bash
node index.js
```

3. The server runs at:

```text
http://localhost:3000
```

You can test the API using Postman or another API client.

## Important Notes

- Notes are stored in a JavaScript array, so they will be lost when the server restarts.
- The `delete` operator removes an element's value but leaves an empty slot in the array. It does not change the array length or shift the remaining elements.
- Use `notes.splice(index, 1)` instead of `delete notes[index]` to remove the element completely and shift the remaining elements.

## Future Improvements

- Add input validation.
- Handle invalid note indexes.
- Store notes in a database.
- Add proper HTTP status codes and error handling.