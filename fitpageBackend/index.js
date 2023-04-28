const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();

app.use(cors());

app.get('/data', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
