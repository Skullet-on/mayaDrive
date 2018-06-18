module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define('News', {
		title: {
			allowNull: false,
			type: DataTypes.STRING
		},
		text: {
			allowNull: false,
			type: DataTypes.TEXT
		}
	});
	return News;
};
