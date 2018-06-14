module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define('News', {
		title: DataTypes.STRING,
		text: DataTypes.TEXT
	});
	return News;
};
