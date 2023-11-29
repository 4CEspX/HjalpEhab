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

const setupInfoTable = db.prepare(`
CREATE TABLE IF NOT EXISTS info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    klass TEXT,
    isAdmin BOOLEAN DEFAULT 0
)
`);

const setupUserTable = db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    klass TEXT,
    timestamp DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime'))
)
`);

setupInfoTable.run();
setupUserTable.run();

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

app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});

app.use(function (req, res) {
  res.status(404);
});
