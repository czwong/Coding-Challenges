const express = require("express");
const morgan = require("morgan");
const router = require("./router");

const port = 3000;
const app = express();

app.use(morgan("dev"));
app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.log("Error serving server");
  } else {
    console.log(`Server running on port ${port}`);
  }
});
