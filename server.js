var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect to Mongo
mongoose.Promise = Promise;
mongoose .connect(MONGODB_URI,{
    useMongoClient:true
});

console.log("Let's get started!");

request("https://www.reddit.com/r/WatchPeopleDieInside/", function(err, response, html){
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