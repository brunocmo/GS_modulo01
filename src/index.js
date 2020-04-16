const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  return res.json('Hello World');
});

app.listen(3333);
