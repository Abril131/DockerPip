const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/wd', (req, res) => {
  res.send('Hello, Docker Pipeline!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});