module.exports = (sequelize, DataTypes) => {
  const Release = sequelize.define('Release', {
    url: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 1000],
          msg: "Please provide 'url' field within 1 to 1000 characters."
        },
        notEmpty: {
          msg: "'url' couldn't be empty"
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
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: "'Date' couldn't be empty"
        },
        isDate: {
          msg: "Date must be Date"
        },
      }
    },
    whatsnew: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 5000],
          msg: "Please provide 'whatsnew' field within 1 to 5000 characters."
        },
        notEmpty: {
          msg: "'whatsnew' couldn't be empty"
        },
      }
    }
  });
  return Release;
};
