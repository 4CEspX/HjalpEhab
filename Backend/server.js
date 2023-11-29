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
    isAdmin BOOLEAN NOT NULL
)
`);

const setupUserTable = db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    klass TEXT NOT NULL,
    timestamp DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime'))
)
`);

setupInfoTable.run();
setupUserTable.run();

app.get("/api/users", (req, res) => {
  const query = db.prepare("SELECT * FROM users");
  const users = query.all();
  res.json(users);
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
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
  const users = query.all();
  res.json(users);
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
});

app.post("/api/info", (req, res) => {
  console.log(req.body);
  res.json("Great success");
  const insertDataQuery = prepare(
    "INSERT INTO users (name, password) VALUES (?, ?)"
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

app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});

app.use(function (req, res) {
  res.status(404);
});
