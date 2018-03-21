"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let seqLog = require("./lib/SEQLogger");
let messages = require("./routes/messages");

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/Info", messages.information);
app.post("/Warning", messages.warning);
app.post("/Error", messages.error);

app.get("/", function(req, res){
    res.send("Welcome to Pan-American Life Logging API!");
});

app.listen(port);
console.log("Server started! At http://localhost:" + port);
