const jsonServer = require('json-server');
const express = require('express');
const app = express();

const router = jsonServer.router('db.json'); // <-- This is where your data lives
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});
