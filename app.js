var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://www.flickr.com/photos/scpetrel/14301524356/"},
        {name: "Granite Hill", image: "https://www.flickr.com/photos/scpetrel/14301524356/"},
        {name: "Mountain Goat's Rest", image: "https://www.flickr.com/photos/scpetrel/14301524356/"}
    ];
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    //get data from form and push it into the campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(3000, function(){
    console.log("The YelpCamp Server Has Started.");
});