const { Subject } = require("../db/models");

exports.subjectList = async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
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
