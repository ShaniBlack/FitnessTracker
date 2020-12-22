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
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        resistance: {
            type: Number
        }
    }
    ]
},

{
toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
  }
}
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
        // specific to .reduce - tells which index to start at. if not noted will start at index 1
    }, 0)
})

// first arg name of collection, name of schema
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout