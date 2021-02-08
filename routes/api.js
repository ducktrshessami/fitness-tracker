const db = require("../models");

const endpoint = "/api/workouts";
const totalDuration = [{
    $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
    }
}];

module.exports = function(app) {
    // getLastWorkout
    app.get(endpoint, function(req, res) {
        db.Workout.aggregate(totalDuration)
            .sort("day")
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    // addExercise
    app.put(endpoint + "/:id", function(req, res) {
        db.Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body }
        })
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    // createWorkout
    app.post(endpoint, function(req, res) {
        db.Workout.create(req.body)
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    // getWorkoutsInRange
    app.get(endpoint + "/range", function(req, res) {
        db.Workout.aggregate(totalDuration)
            .sort("day")
            .then(data => data.slice(-7))
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });
};
