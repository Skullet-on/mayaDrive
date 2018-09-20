module.exports = (sequelize, DataTypes) => {
  const Statistics = sequelize.define('Statistics', {
    type: {
    	allowNull: false,
    	type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please provide 'type' field within 1 to 50 characters."
        },
        notEmpty: {
          msg: "'type' couldn't be empty"
        },
      }
    },
    version: {
    	allowNull: false,
    	type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please provide 'version' field within 1 to 50 characters."
        },
        notEmpty: {
          msg: "'version' couldn't be empty"
        },
      }
    }
  });
  return Statistics;
};
