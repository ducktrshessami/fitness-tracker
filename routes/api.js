const db = require("../models");

const endpoint = "/api/workouts";

module.exports = function(app) {
    // getLastWorkout
    app.get(endpoint, function(req, res) {
        db.Workout.find()
            .sort("day")
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
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
