const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req,res) => {
  db.Workout.find({})

  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});


// Calls workout data from API
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

  // creates new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Updates workout
router.put("/api/workouts/:id", function({body, params}, res) {
  db.Workout.findByIdAndUpdate(params.id,
    { $push: { exercises: body }},
    { new: true }
)
.then(workout => {
  res.json(workout);
})
.catch(err => {
  res.json(err);
});

});

module.exports = router

