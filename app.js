// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   // res.send("Working!");
// });


// app.listen(process.env.PORT || 5000);

var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
