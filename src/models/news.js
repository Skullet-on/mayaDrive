module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 500],
          msg: "Please provide 'Title' field within 1 to 500 characters."
        }
      }
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 10000],
          msg: "Please provide 'Text' field within 1 to 10000 characters."
        }
      }
    }
  });
  return News;
};
