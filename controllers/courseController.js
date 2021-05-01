const { Course, Subject } = require("../db/models");

exports.creatSubject = async (req, res, next) => {
  console.log(req.user);
  try {
    //req.body.storeId this is the relation cell
    req.body.courseId = req.course.id;
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    next(error);
  }
};

exports.courseCreate = async (req, res, next) => {
  try {
    req.body.courseId = req.params.courseId;
    const newcourse = await Course.create(req.body);
    res.status(201).json(newcourse);
  } catch (error) {
    next(error);
  }
};

exports.courseUpdate = async (req, res, next) => {
  try {
    await req.course.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.courseList = async (req, res, next) => {
  try {
    const courses = await Course.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },

      include: [
        {
          model: Subject,
          as: "subjects",
          attributes: ["id"],
        },
      ],
    });

    res.json(courses);
  } catch (error) {
    next(error);
  }
};

exports.fetchcourse = async (courseId, next) => {
  try {
    const courses = await Course.findByPk(courseId);
    return courses;
  } catch (error) {
    next(error);
  }
};

exports.courseDelete = async (req, res, next) => {
  try {
    await req.course.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
