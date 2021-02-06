const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const basename = path.basename(__filename);

var db = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        let modelName = file.slice(0, -3);
        db[modelName] = mongoose.model(modelName, new mongoose.Schema(require(path.join(__dirname, file))));
    });

module.exports = db;
