module.exports = (sequelize, DataTypes) => {
  const Faq = sequelize.define('Faq', {
    question: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 500],
          msg: "Please provide 'Question' field within 1 to 500 characters."
        }
      }
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 10000],
          msg: "Please provide 'Answer' field within 1 to 10000 characters."
        }
      }
    }
  });
  return Faq;
};
