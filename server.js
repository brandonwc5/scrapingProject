var cheerio = require("cheerio");
var mongojs = require("mongojs");
var request = require("request");
var mongoose = require("mongoose");
var app = require('express')();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect to Mongo
mongoose.Promise = Promise;
mongoose .connect(MONGODB_URI,{
});

console.log("Let's get started!");

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
    res.send(./public/assets/index.js);
  });

app.get("/saved", function(req,res){
    res.send("Hiya Earth");
})
request("https://www.reddit.com/r/AcademicPhilosophy/", function(err, response, html){
    var $= cheerio.load(html);
    var results = [];
    $("p.title").each(function(i, element){
        var title = $(element).text();
        var link = $(element).children().attr("href");
        results.push({
            title: title,
            link: link
        })
    })
    console.log(results);
})
app.listen(3000, function(){
    console.log("Listening on port 3000");
})