const bcrypt = require("bcrypt");

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
        },
        isUnique(value, next) {
          User.find({
            where: { email: value },
            attributes: ['id']
          }).done((user) => {
            if (user)
              return next('This Email has been already taken');
            next();
          });
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password couldn't be empty"
        }
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  
  const generateHash = (password) => {
    return bcrypt.hash(password, 10);
  };

  User.beforeCreate((user, options) => {
    user.email = user.email.toLowerCase();
    return generateHash(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  return User;
};
