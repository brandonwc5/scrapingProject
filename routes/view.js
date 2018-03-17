var path = require('path')

module.exports = function(app){
    app.get("/", function(req, res) {
        res.render('../public/assets/index.js');
      });
    
    app.get("/saved", function(req,res){
        res.render("Hiya Earth");
    })
}