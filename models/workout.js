const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        // anonymous arrow function
        default: () => new Date()
    },

    exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Please enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter and exercise name"
        },
        duration: {
            type: Number,
            required: "Please enter a exercise duration in minutes"
        },
        weight: 

        reps:

        sets:

        resistance: {
            type: Number
        }
    }
    ]
})

// first arg name of collection, name of schema
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout