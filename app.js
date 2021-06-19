const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // res.send("Working!");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 5000);

// var http = require('http'),
//     fs = require('fs');


// fs.readFile('index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });