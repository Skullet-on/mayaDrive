module.exports = (sequelize, DataTypes) => {
  const Faqs = sequelize.define('Faqs', {
    question: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 1000],
          msg: "Please provide 'question' field within 1 to 1000 characters."
        },
        notEmpty: {
          msg: "'question' couldn't be empty"
        },
      }
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 5000],
          msg: "Please provide 'answer' field within 1 to 5000 characters."
        },
        notEmpty: {
          msg: "'answer' couldn't be empty"
        },
      }
    }
  });
  return Faqs;
};
