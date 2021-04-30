const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    startCourse: {
      type: DataTypes.DATEONLY,
    },
    enddate: {
      type: DataTypes.DATEONLY,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Course, {
    source: ["name"],
  });
  return Course;
};
