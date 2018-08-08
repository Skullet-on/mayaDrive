module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50],
          msg: 'Please provide field within 1 to 50 characters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique :true,
      validate: {
        isEmail: {
          msg: "Email must be Email"
        },
        notEmpty: {
          msg: "Email couldn't be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password couldn't be empty"
        },
        len: {
          args: [1, 20],
          msg: 'Please provide field within 1 to 20 characters.'
        }
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return User;
};
