# Note-Taking API

This is a simple **Note-Taking API** built with _Node.js_, _Express.js_, _TypeScript_, and _MongoDB Atlas_. This API allows you perform CRUD operations such as create, read, update, and delete notes.

---

## Features

- _Create a Note_: Add a new note with a title and content.
- _Get All Notes_: Retrieve a list of all created notes.
- _Get a Single Note_: Fetch a specific note by its ID.
- _Update a Note_: Modify the title or content of an existing note.
- _Delete a Note_: Remove a note from the database.
- Featch notes by Category
- **Custom Middleware** for:

1. Validation (with no external library)
2. Logging Requests (track API requests and log them to file system)

- TypeScript with strong typing
- MongoDB Database with mongoose

---

## Technologies Used

- _Node.js_: A runtime environment for executing JavaScript on the server.
- _Express.js_: A web framework for building APIs.
- _TypeScript_: A typed superset of JavaScript for better code quality.
- _MongoDB Atlas_: A cloud-based NoSQL database for storing notes.
- _Mongoose_: An ODM (Object Data Modeling) library for MongoDB.

---

## Getting Started

### 1. Clone this Repository

```bash
git clone https://github.com/your-username/note-taking-api.git
cd note-taking-api

```

### Install Dependencies

```bash
npm install

```

### Set Up Environment Variables

Create a .env file in the root directory and add your MongoDB Atlas connection string:

```env

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.juxuh.mongodb.net/<database>?retryWrites=true&w=majority

```

- Replace **username**, **password**, and **database** with your MongoDB Atlas credentials (username, password and DB name).

### Compile TypeScript

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

## Notes Routes (/api/notes)

#### Create a Note

- _POST_ /api/notes/
- _Description_: Creates a note
- _Request Body_:
  json
  {
  "title": "error",
  "content": "error fixed!"
  }

#### Get All Notes

- _GET_ /api/notes/
- _Description_: Fetches all notes

#### Get a Single Note By ID

- _GET_ /api/notes/:id
- _Description_: Fetches a note

#### Update a Note

- _PUT_ /api/notes/:id
- _Description_: Updates a note
- _Request Body_:
  json
  {
  "title": "Updated error note",
  "content": "This error note has been updated!"
  }

#### Delete a Note

- _DELETE_ /api/notes/:id
- _Description_: Deletes a note

#### Get a Note By Category ID

- _GET_ /api/notes/categories/:category
- _Description_: Gets a note by Category

---

### Categories Routes (/api/categories)

### Create a Category

- _POST_ /api/categories/
- _Description_: Creates a category
- _Request Body_:
  json
  {
  "title": "error category",
  "content": "error category fixed!"
  }

### Get All Categories

- _GET_ /api/categories/
- _Description_: Fetches all categories

### Get a Single Category By ID

- _GET_ /api/categories/:id
- _Description_: Fetches a category

### Update a Category

- _PUT_ /api/categories/:id
- _Description_: Updates a category
- _Request Body_:
  json
  {
  "title": "Updated error category",
  "content": "This error category has been updated!"
  }

### Delete a Category

- _DELETE_ /api/categories/:id
- _Description_: Deletes a category

---

## Middleware

### Validation Middelware

Ensures the request body matches the expected format before proceeding.

```ts
export const validateRequest =
  <T extends Record<string, any>>(Schema: {
    [K in keyof T]: (value: any) => string | null;
  }) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const errors: Partial<Record<keyof T, string>> = {};

      for (const key in Schema) {
        if (Object.prototype.hasOwnProperty.call(Schema, key)) {
          const validate = Schema[key];
          const error = validate(req.body[key]);

          if (error) {
            errors[key] = error;
          }
        }
      }

      if (Object.keys(errors).length > 0) {
        res.status(400).json({
          success: false,
          errors,
        });
      }
    } catch (err) {
      next(err);
    }

    next();
  };

```

---

### Logging Middleware

Logs requests to both console and a file (logs/api.log)

```ts
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../logs/api.log");

if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${req.method} ${req.url} \n`;

  console.log(logEntry);

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) console.error("Error writing to this log file: ", err);
  });

  res.on("finish", () => {
    const responseLog = `[${timestamp}] ${req.method} ${req.url} - ${res.statusCode} \n`;
    console.log(responseLog);

    fs.appendFile(filePath, responseLog, (err) => {
      if (err) {
        console.error("Error writing to this log file ", err);
      }
    });
  });
  next();
};

export default logRequest;

```

## Contributing

If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeatureName).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeatureName).
5. Open a pull request.

---
