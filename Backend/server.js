// Backend/server.js

import cors from "cors";
import express from "express";

import Database from 'better-sqlite3';

const app = express();
const port = 3000;

app.use(cors());

const db = new Database('./database.db');

const prepareCache = new Map();
const prepare = (query) => {
  if (prepareCache.has(query)) {
      return (
          prepareCache.get(query)
      );
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

app.get('/api/users', (req, res) => {
  const query = db.prepare('SELECT * FROM users');
  const users = query.all();
  res.json(users);
});

app.listen(port, () => {
const insertDataQuery = db.prepare('INSERT INTO users (name, klass) VALUES (?, ?)');
insertDataQuery.run('jane_doe', 'jane@example.com');
  console.log(`Server is running on port ${port}`);
});


