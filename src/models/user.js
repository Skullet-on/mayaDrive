module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
    	defaultValue: false
		}
	});
	return User;
};
