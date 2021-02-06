module.exports = {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array,
        validate: [exercise => exercise.type && exercise.name && exercise.duration, "Workout metadata missing"]
    }
};
