const db = require("../models");

const endpoint = "/api/workouts";

module.exports = function(app) {
    // getLastWorkout
    app.get(endpoint, function(req, res) {

    });

    // addExercise
    app.put(endpoint + "/:id", function(req, res) {

    });

    // createWorkout
    app.post(endpoint, function(req, res) {

    });

    // getWorkoutsInRange
    app.get(endpoint + "/range", function(req, res) {

    });
};
