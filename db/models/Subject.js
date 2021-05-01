const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    color: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    numberOfdays: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      // allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Subject, {
    source: ["name"],
  });
  return Subject;
};
