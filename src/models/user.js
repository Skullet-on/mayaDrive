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
    console.log("generate hash");
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  const validPassword = (password) => {
    console.log("valid password");
    return bcrypt.compareSync(password, this.local.password);
  };

  User.beforeCreate((user, options) => {
    return generateHash(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  return User;
};
