"use strict";

let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let seqLog = require("./lib/SEQLogger");
let messages = require("./routes/messages");

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/Information", messages.getInformation);
app.post("/Information", messages.information);
app.get("/Warning", messages.getWarning);
app.post("/Warning", messages.warning);
app.get("/Error", messages.getError);
app.post("/Error", messages.error);

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port);
console.log("Server started! At http://localhost:" + port);
