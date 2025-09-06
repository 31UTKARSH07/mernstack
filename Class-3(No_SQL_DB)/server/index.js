const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

let courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
  },
  isLive: {
    type: Boolean,
    required: true,
  },
});
const CourseModel = mongoose.model("Courses", courseSchema);

app.get("/", (req, res) => {
  res.send("Message from the server");
});

app.post("/courses", async (req, res) => {
  let course = await CourseModel.create({
    course_name: req.body.course_name,
    instructor: req.body.instructor,
    reatings: req.body.reatings,
    isLive: req.body.isLive,
  });
  res.send(course);
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
