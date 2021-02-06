const db = require("../models");

const endpoint = "/api/workouts";

// Helper function used with Array.map
function mapWithTotalDuration(workout) {
    let foo = JSON.parse(JSON.stringify(workout));
    foo.totalDuration = foo.exercises.reduce((a, b) => a + b.duration, 0);
    return foo;
}

module.exports = function(app) {
    // getLastWorkout
    app.get(endpoint, function(req, res) {
        db.Workout.find()
            .sort("day")
            .then(data => data.map(mapWithTotalDuration))
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    // addExercise
    app.put(endpoint + "/:id", function(req, res) {
        db.Workout.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    // createWorkout
    app.post(endpoint, function(req, res) {

    });

    // getWorkoutsInRange
    app.get(endpoint + "/range", function(req, res) {

    });
};
