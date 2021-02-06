const path = require("path");

const public = path.resolve(__dirname, "..", "public");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.status(200).sendFile(path.join(public, "index.html"));
    });

    app.get("/exercise", function(req, res) {
        res.status(200).sendFile(path.join(public, "exercise.html"));
    });

    app.get("/stats", function(req, res) {
        res.status(200).sendFile(path.join(public, "stats.html"));
    });
};
