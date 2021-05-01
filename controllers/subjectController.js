const { Subject, Task } = require("../db/models");

exports.creatTask = async (req, res, next) => {
  console.log(req.user);
  try {
    req.body.subjectId = req.subject.id;
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.taskList = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.subjectList = async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },

      include: [
        {
          model: Task,
          as: "tasks",
          attributes: ["id"],
        },
      ],
    });
    res.json(subjects);
  } catch (error) {
    next(error);
  }
};

exports.fetchsubject = async (subjectId, next) => {
  try {
    const subjects = await Subject.findByPk(subjectId);
    return subjects;
  } catch (error) {
    next(error);
  }
};

exports.subjectUpdate = async (req, res, next) => {
  try {
    await req.subject.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.subjectDelete = async (req, res, next) => {
  try {
    await req.subject.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.subjectUpdate = async (req, res, next) => {
  try {
    await req.subject.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
