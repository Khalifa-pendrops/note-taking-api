# Note-Taking API

This is a simple  **Note-Taking API** built with *Node.js*, *Express.js*, *TypeScript*, and *MongoDB Atlas*. This API allows you perform CRUD operations such as create, read, update, and delete notes.

---

## Features

- *Create a Note*: Add a new note with a title and content.
- *Get All Notes*: Retrieve a list of all created notes.
- *Get a Single Note*: Fetch a specific note by its ID.
- *Update a Note*: Modify the title or content of an existing note.
- *Delete a Note*: Remove a note from the database.

---

## Technologies Used

- *Node.js*: A runtime environment for executing JavaScript on the server.
- *Express.js*: A web framework for building APIs.
- *TypeScript*: A typed superset of JavaScript for better code quality.
- *MongoDB Atlas*: A cloud-based NoSQL database for storing notes.
- *Mongoose*: An ODM (Object Data Modeling) library for MongoDB.

---


## Getting Started

### 1. Clone this Repository

```bash
git clone https://github.com/your-username/note-taking-api.git
cd note-taking-api

```


### 2. Install Dependencies

```bash
npm install

```


### 3. Set Up Environment Variables

Create a .env file in the root directory and add your MongoDB Atlas connection string:

```env

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.juxuh.mongodb.net/<database>?retryWrites=true&w=majority

```


- Replace **username**, **password**, and **database** with your MongoDB Atlas credentials (username, password and DB name).

### 4. Compile TypeScript

```bash
tsc
npm run build or node dist/server.js <file name>

```


### 5. Start the Server

```bash
npm run dev

```

The server will start on http://localhost:8080 unless the server.js file has been reconfigured to change port number.

---

## API Endpoints

### Create a Note
- *POST* /api/notes
- *Request Body*:
  json
  {
    "title": "error",
    "content": "error fixed!"
  }
  

### Get All Notes
- *GET* /api/notes

### Get a Single Note
- *GET* /api/notes/:id

### Update a Note
- *PUT* /api/notes/:id
- *Request Body*:
  json
  {
    "title": "Updated error note",
    "content": "This error note has been updated!"
  }
  

### Delete a Note
- *DELETE* /api/notes/:id

---

## Example Requests: **Use PostMan, Curl, Thunder Client or EchoAPI for testing

### Create a Note
```bash
curl -X POST http://localhost:8080/api/notes\
-H "Content-Type: application/json"\
-d '{
  "title": "error",
  "content": "error fixed!"
}'

```


### Get All Notes
```bash
curl http://localhost:8080/api/notes

```

### Get a Single Note
```bash
curl http://localhost:8080/api/notes/<note_id>

```

### Update a Note
```bash
curl -X PUT http://localhost:8080/api/notes/<note_id>\
-H "Content-Type: application/json"\
-d '{
  "title": "Updated error note",
  "content": "This error note has been updated!"
}'

```

### Delete a Note
```bash
curl -X DELETE http://localhost:8080/api/notes/<note_id>

```

---


## Contributing

If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeatureName).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeatureName).
5. Open a pull request.

---

