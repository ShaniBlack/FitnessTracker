const db = require("../models");

module.exports = function(app) {
app.get("/api/workouts", (req,res) => {
  db.Workout.find({})

  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});
};

// Calls workout data from API
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

  // creates new workout
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Updates workout
app.put("api/workouts/:id", function({body, params}, res) {
  db.Workout.findByIdAndUpdate(params.id,
    { push: {exercises.body }},
    { new: true }
)
.then(workout => {
  res.json(workout);
})
.catch(err => {
  res.json(err);
});

});


// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
