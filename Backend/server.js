// Backend/server.js

import express from "express";

import Database from 'better-sqlite3';

const app = express();
const port = 3000;

// app.use(cors());

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
    email TEXT NOT NULL

)
`);

setupProductsTable.run();

app.get('/api/users', (req, res) => {
  const query = db.prepare('SELECT * FROM users');
  const users = query.all();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const insertDataQuery = db.prepare('INSERT INTO users (username, email) VALUES (?, ?)');
// insertDataQuery.run('jane_doe', 'jane@example.com');

