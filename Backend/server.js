// Backend/server.js

import cors from "cors";
import express from "express";

import Database from "better-sqlite3";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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

const setupProductsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    klass TEXT NOT NULL,
    timestamp DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime'))
)
`);

setupProductsTable.run();

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
  insertDataQuery.run(req.name, req.klass);
});

app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});

app.use(function (req, res) {
  res.status(404);
});
