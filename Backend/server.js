// Backend/server.js

import cors from "cors";
import express from "express";

import Database from "better-sqlite3";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const db = new Database("./database.db");


const prepareCache = new Map();
const prepare = (query) => {
  if (prepareCache.has(query)) {
    return prepareCache.get(query);
  }

  const stmt = db.prepare(query);
  prepareCache.set(query, stmt);
  return stmt;
};

const setupRolesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT
)
`);

setupRolesTable.run();


const setupUsersTable = db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    role INTEGER NOT NULL,
    class_id INTEGER NOT NULL,
    FOREIGN KEY(role) REFERENCES roles(role),
    FOREIGN KEY(class_id) REFERENCES classes(id)
)
`);

setupUsersTable.run();


const setupClassesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
)
`);

setupClassesTable.run();


const setupRoomTable = db.prepare(`
CREATE TABLE IF NOT EXISTS room (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
)
`);

setupRoomTable.run();


const setupTagsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tag_id TEXT
)
`);

setupTagsTable.run();


const setupLecturesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS lectures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    day INTEGER,
    start_time TIME,
    end_time TIME
)
`);

setupLecturesTable.run();


const setupUsersLecturesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS users_lectures (
    user_id INTEGER NOT NULL,
    lecture_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(lecture_id) REFERENCES lectures(id)
)
`);

setupUsersLecturesTable.run();




app.get("/api/users", (req, res) => {
  const query = db.prepare("SELECT * FROM users");
  const users = query.all();
  res.json(users);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.json("Great success");
  const insertDataQuery = prepare(
    "INSERT INTO users (name, klass) VALUES (?, ?)"
  );
  if (!req.body.name || !req.body.klass)
  {
    res.status(400);
    return;
  }
  insertDataQuery.run(req.body.name, req.body.klass);
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
});




app.get("/api/info", (req, res) => {
  const query = db.prepare("SELECT * FROM info");
  const info = query.all();
  res.json(info);
});

app.post("/api/info", (req, res) => {
  console.log(req.body);
  if (!req.body.name || !req.body.password) {
    res.status(400).send("Name, password and class are required!");
    return;
  }
  
  const insertDataQuery = db.prepare("INSERT INTO info (name, password, klass, isAdmin) VALUES (?, ?, ?, ?)");
  insertDataQuery.run(req.body.name, req.body.password, req.body.klass, req.body.isAdmin);
  
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
  
  res.json("Great success");
});


app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const query = db.prepare("SELECT name FROM info WHERE name = ? AND password = ?");
  const user = query.get(username, password);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed: Invalid username or password" });
  }
});

app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});

app.use(function (req, res) {
  res.status(404);
});

