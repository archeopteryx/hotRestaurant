// 3 html pages - homepage, view tables, make reservation
// 3 apis endpoints
// 1st is listing out the 5 tables
// wait list api to show who's on waiting list
// 3rd api to make reservations
// dependencies: express, body-parser, path
// set up port to call it to actively listen

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let tables = [];
let waitlist = [];

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
   });

app.get("/api/tables", function(req, res) {
    res.json(tables);
    res.json(waitlist)    
})

app.get("/api/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
   });   

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
   });

app.post("/api/new", function(req, res) {
    let newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);    
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });  