const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING,
			validate: {
				len: [1,50]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
				notEmpty: true,
				len: [1,255]
			}
		},
		password_digest: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		password: {
			type: DataTypes.VIRTUAL,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		password_confirmation: {
			type: DataTypes.VIRTUAL
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
    	defaultValue: false
		}
	}, {
		freezeTableName: true,
		indexes: [{unique: true, fields: ['email']}],
		instanceMethods: {
			authenticate: value => {
				if (bcrypt.compareSync(value, this.password_digest))
					return this;
				else
					return false;
			}
		}
	});
	
	const hasSecurePassword = (user, options, callback) => {
		if (user.password != user.password_confirmation) {
			throw new Error("Password confirmation doesn't match Password");
		}
		bcrypt.hash(user.get('password'), 10, (err, hash) => {
			if (err) return callback(err);
			user.set('password_digest', hash);
			return callback(null, options);
		});
	};

	User.beforeCreate((user, options, callback) => {
		user.email = user.email.toLowerCase();
		if (user.password)
			hasSecurePassword(user, options, callback);
		else
			return callback(null, options);
	})

	User.beforeUpdate((user, options, callback) => {
		user.email = user.email.toLowerCase();
		if (user.password)
			hasSecurePassword(user, options, callback);
		else
			return callback(null, options);
	})

	return User;
};
