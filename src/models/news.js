module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 1000],
          msg: "Please provide 'title' field within 1 to 1000 characters."
        },
        notEmpty: {
          msg: "'title' couldn't be empty"
        },
      }
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 5000],
          msg: "Please provide 'text' field within 1 to 5000 characters."
        },
        notEmpty: {
          msg: "'text' couldn't be empty"
        },
      }
    }
  });
  return News;
};
