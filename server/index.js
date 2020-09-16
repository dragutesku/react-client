const path = require('path');
const express = require('express');

const app = express();

// Bundled Client source
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("static"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

const port = '3006';

//set port, listen for requests
app.listen(port, () => {
  console.log(`Client running on port ${port}`);
});
