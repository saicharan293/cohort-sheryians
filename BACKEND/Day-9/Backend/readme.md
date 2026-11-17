# 📝 Notes API – Node.js & Express

A simple Notes API built using **Node.js, Express.js, and MongoDB (Mongoose)**.

This project allows you to create, view, delete, and update notes using different API endpoints.

If you are new to backend development, don't worry! This README explains everything step by step.

---

## 📌 1. What does this project do?

Imagine you are building a simple notes application where users can:

- Create a new note.
- View all saved notes.
- Delete a note.
- Update the description of an existing note.

This project handles these operations through APIs.

An API acts as a bridge between the frontend and the backend.

For example:

When a user clicks the **Create Note** button on a website, the frontend sends a request to the backend. The backend saves the note in the database and sends a response.

---

## 🛠️ 2. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Runs JavaScript outside the browser. |
| Express.js | Helps us create API routes easily. |
| MongoDB | Stores our notes. |
| Mongoose | Helps Node.js communicate with MongoDB. |

---

## 📂 3. Project Structure

Your project may look something like this:

```text
notes-api/
│
├── models/
│   └── note.model.js
│
├── routes/
│   └── note.routes.js
│
├── server.js
│
├── package.json
│
└── README.md
```

**What does each file do?**

- `models/` – Contains the structure of our notes.
- `note.model.js` – Defines how a note should look in MongoDB.
- `routes/` – Contains the API endpoints.
- `note.routes.js` – Handles creating, fetching, deleting, and updating notes.
- `server.js` – Starts our Express server.
- `package.json` – Contains project information and dependencies.
- `README.md` – Explains the project.

*Note: Your actual folder names may be different. The important thing is to understand the purpose of each file.*

---

## 🚀 4. Getting Started

Follow these steps to run the project on your computer.

### Step 1: Clone the project

```bash
git clone <your-repository-url>
```

### Step 2: Open the project folder

```bash
cd notes-api
```

### Step 3: Install dependencies

```bash
npm install
```

This installs all the packages required by the project.

If you haven't installed the required packages yet, run:

```bash
npm install express mongoose
```

### Step 4: Connect MongoDB

Make sure your MongoDB database is running and your application is connected to it.

### Step 5: Start the server

If your entry file is `server.js`, run:

```bash
node server.js
```

Your server should now be running.

---

## 🔗 5. API Endpoints

This project contains four API endpoints.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes` | Get all notes |
| DELETE | `/api/notes/:id` | Delete a note |
| PATCH | `/api/notes/:id` | Update a note's description |

Let's understand each endpoint.

---

## ✏️ 6. Create a Note

**Method:** `POST`

**Endpoint:**

```http
/api/notes
```

This API creates a new note and saves it in the MongoDB database.

### Request Body

Send the following JSON data:

```json
{
  "title": "Learn Node.js",
  "description": "Understand Express and MongoDB"
}
```

### What happens behind the scenes?

1. The client sends a POST request.
2. `express.json()` reads the JSON data sent by the client.
3. We extract `title` and `description` from `req.body`.
4. `notesModel.create()` saves the note in MongoDB.
5. The server sends a success response.

### Success Response

**Status Code:** `201 Created`

```json
{
  "message": "Notes created successfully",
  "notes": {
    "_id": "generated_note_id",
    "title": "Learn Node.js",
    "description": "Understand Express and MongoDB"
  }
}
```

---

## 📖 7. Get All Notes

**Method:** `GET`

**Endpoint:**

```http
/api/notes
```

This API fetches all the notes stored in the MongoDB database.

### What happens behind the scenes?

1. The client sends a GET request.
2. `notesModel.find()` searches for all notes in the database.
3. MongoDB returns the matching notes.
4. The server sends the notes back as a JSON response.

### Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Notes Fetched Successfully",
  "notes": [
    {
      "_id": "note_id_1",
      "title": "Learn Node.js",
      "description": "Understand Express"
    },
    {
      "_id": "note_id_2",
      "title": "Learn MongoDB",
      "description": "Understand databases"
    }
  ]
}
```

**Remember:** `find()` returns an array of notes, even if there is only one matching note.

---

## 🗑️ 8. Delete a Note

**Method:** `DELETE`

**Endpoint:**

```http
/api/notes/:id
```

This API deletes a particular note using its unique ID.

Here, `:id` represents the ID of the note you want to delete.

### Example

```http
/api/notes/674abc123456789012345678
```

### What happens behind the scenes?

1. The client sends a DELETE request.
2. We get the note ID using `req.params.id`.
3. `findByIdAndDelete()` searches for the note using that ID.
4. If the note exists, MongoDB deletes it.
5. The server sends a response.

### Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Note deleted successfully",
  "note": {
    "_id": "674abc123456789012345678",
    "title": "Learn Node.js",
    "description": "Understand Express"
  }
}
```

---

## 🔄 9. Update a Note

**Method:** `PATCH`

**Endpoint:**

```http
/api/notes/:id
```

This API updates the description of an existing note.

Notice that we are updating only the description, not the entire note.

### Request Body

```json
{
  "description": "Learn Node.js, Express and MongoDB"
}
```

### What happens behind the scenes?

1. The client sends a PATCH request with the note ID.
2. We get the ID using `req.params.id`.
3. We get the new description using `req.body`.
4. `findByIdAndUpdate()` finds the note and updates its description.
5. The server sends a success response.

### Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Note description updated successfully"
}
```

---

## 🧠 10. Important Express and Mongoose Concepts

If you understand these concepts, you will understand most of the code in this project.

### 1. What is `req.body`?

`req.body` contains the data sent by the client.

For example:

```javascript
const { title, description } = req.body;
```

This extracts the title and description from the incoming request.

### 2. What is `req.params`?

`req.params` contains values passed through the URL.

For example:

```javascript
app.delete("/api/notes/:id", async (req, res) => {
    console.log(req.params.id);
});
```

If the URL is:

```http
/api/notes/12345
```

Then:

```javascript
req.params.id
```

will give you:

```text
12345
```

### 3. What is `express.json()`?

```javascript
app.use(express.json());
```

It allows Express to read JSON data sent in the request body.

Without it, `req.body` may be undefined for JSON requests.

### 4. What is `async/await`?

Database operations take time.

We use `async/await` to wait for these operations to finish before moving to the next step.

Example:

```javascript
const notes = await notesModel.find();
```

This means:

Wait until MongoDB returns the notes, then store the result in the `notes` variable.

### 5. What is a Mongoose Model?

```javascript
const notesModel = require("./models/note.model");
```

A model helps us interact with a MongoDB collection.

We use it to:

- Create notes using `create()`.
- Fetch notes using `find()`.
- Delete notes using `findByIdAndDelete()`.
- Update notes using `findByIdAndUpdate()`.

### 6. What is `res.status().json()`?

```javascript
res.status(200).json({
    message: "Success"
});
```

It sends a response to the client.

- `status(200)` sets the HTTP status code.
- `json()` sends the response in JSON format.

---

## 🧪 11. How to Test the APIs?

You can test these endpoints using Postman or Thunder Client.

Make sure your server is running before testing.

Use this base URL:

```text
http://localhost:3000
```

Replace `3000` with your actual server port if it is different.

### Testing Checklist

- [ ] Send a POST request to create a note.
- [ ] Send a GET request to fetch all notes.
- [ ] Send a PATCH request to update a note.
- [ ] Send a DELETE request to delete a note.

**Recommended testing order:** POST → GET → PATCH → GET → DELETE → GET.

This helps you understand how the data changes in the database.

---

## 📌 12. Important Things to Remember

1. `POST` is used to create new data.
2. `GET` is used to fetch data.
3. `DELETE` is used to remove data.
4. `PATCH` is used to update part of existing data.
5. `req.body` is used to access data sent by the client.
6. `req.params` is used to access values from the URL.
7. `await` waits for an asynchronous operation to finish.
8. Mongoose models help us perform database operations.

---

## 🎯 13. Final Thoughts

Congratulations! You have built a simple CRUD API using Node.js, Express.js, and MongoDB.

CRUD stands for:

- **C – Create:** Add a new note.
- **R – Read:** Fetch existing notes.
- **U – Update:** Modify an existing note.
- **D – Delete:** Remove a note.

These four operations are the foundation of almost every backend application.

Once you understand this project, you are ready to build more advanced applications with Node.js.

**Keep building. Keep learning. Happy Coding! 🚀**