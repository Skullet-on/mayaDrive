const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please provide 'firstName' field within 1 to 50 characters."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "This Email has been already taken"
      },
      validate: {
        isEmail: {
          msg: "Email must be Email"
        },
        notEmpty: {
          msg: "Email couldn't be empty"
        },
        unique(value, next) {       
          Users.find({
            where: { email: value }
          }).done((user) => {
            if (user) return next('This Email has been already taken');
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
      defaultValue: false,
      validate: { 
        boolean(val, next) {
          if (typeof val !== "boolean") return next("NOT BOOLEAN");
          next();
        }
      }
    }
  });
  
  const generateHash = (password) => {
    return bcrypt.hash(password, 10);
  };

  Users.beforeCreate((user, options) => {
    user.email = user.email.toLowerCase();
    return generateHash(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  return Users;
};
