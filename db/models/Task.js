module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
    },

    date: {
      type: DataTypes.DATEONLY,
    },
  });
  return Task;
};
