const express = require("express");
const passport = require("passport");

const router = express.Router();
const {
  subjectList,
  fetchsubject,
  subjectDelete,
  subjectUpdate,
  taskList,
  creatTask,
} = require("../controllers/subjectController");

router.param("subjectId", async (req, res, next, subjectId) => {
  const subject = await fetchsubject(subjectId, next);
  if (subject) {
    req.subject = subject;
    next();
  } else {
    const err = new Error("subject Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", subjectList);

router.get("/tasks", taskList);
router.delete("/:subjectId", subjectDelete);

router.post("/:subjectId/tasks", creatTask);
router.get("/", subjectList);

router.put(
  "/:subjectId",

  subjectUpdate
);
module.exports = router;
