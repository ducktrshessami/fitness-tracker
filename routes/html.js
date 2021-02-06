const path = require("path");

const public = path.resolve(__dirname, "..", "public");

module.exports = function(app) {
    app.get("/", function(req, res) {
        
    });

    app.get("/exercise", function(req, res) {
        
    });

    app.get("/stats", function(req, res) {

    });
};
