const express = require("express");
const passport = require("passport");

const router = express.Router();
const {
  courseList,
  fetchcourse,
  courseCreate,
  courseDelete,
  creatSubject,
  courseUpdate,
} = require("../controllers/courseController");

router.param("courseId", async (req, res, next, courseId) => {
  const course = await fetchcourse(courseId, next);
  if (course) {
    req.course = course;
    next();
  } else {
    const err = new Error("course Not Found");
    err.status = 404;
    next(err);
  }
});

router.post(
  "/:courseId/subjects",

  creatSubject
);
router.get("/", courseList);

router.post("/", courseCreate);

router.delete("/:courseId", courseDelete);

router.get("/", courseList);

router.put(
  "/:courseId",

  courseUpdate
);
module.exports = router;
