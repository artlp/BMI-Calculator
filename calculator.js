const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let hgt = Number(req.body.hgt);
    let wgt = Number(req.body.wgt);
    console.log(req.body);
    console.log(hgt, wgt);
    res.send("Your bmi is: " + (wgt/(hgt*hgt))*10000);
});

app.listen(3000, function() {
    console.log("server online");
});