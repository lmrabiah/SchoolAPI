module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    subjectNmae: {
      type: DataTypes.STRING,
    },

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
  });
  return Subject;
};
