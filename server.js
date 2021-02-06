const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

var app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes")(app);

mongoose.connection.once("open", function() {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
