const path = require('path');
const express = require('express');
const expressStaticGzippath = "express-static-gzip";

const app = express();

// Bundled Client source
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("static"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// app.use("/", expressStaticGzippath(path.join(__dirname, "..", "dist"), {
//   enableBrotli: true,
//   orderPreference: ['br', 'gz'],
//   setHeaders: function (res, path) {
//      res.setHeader("Cache-Control", "public, max-age=31536000");
//   }
//  }));

const port = '3006';

//set port, listen for requests
app.listen(port, () => {
  console.log(`Client running on port ${port}`);
});
