# Notes API

A simple REST API built using **Node.js and Express.js** to create, retrieve, update, and delete notes.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes` | Create a new note |
| GET | `/notes` | Retrieve all notes |
| PATCH | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## HTTP Status Codes

| Status Code | Meaning | Usage |
|---|---|---|
| **200 OK** | Request successful | Used for fetching, updating, and deleting notes |
| **201 Created** | Resource created successfully | Used when a new note is inserted |
| **204 No Content** | Request successful, no response body | Can be used for successful deletion without a message |
| **400 Bad Request** | Invalid request | Used for invalid input data |
| **404 Not Found** | Resource not found | Used when the requested note does not exist |
| **500 Internal Server Error** | Server-side error | Used for unexpected server errors |

## Current Implementation

- `POST /notes` → **201 Created**
- `GET /notes` → **200 OK**
- `PATCH /notes/:id` → **200 OK**
- `DELETE /notes/:id` → **200 OK**

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Note

This project currently uses an in-memory array to store notes. Data will be lost when the server restarts.