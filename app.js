const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // res.send("<H1>Hello<H1>");
});


app.listen(process.env.PORT || 5000);
