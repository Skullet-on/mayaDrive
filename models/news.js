module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define('News', {
		title: DataTypes.STRING,
		ntext: DataTypes.TEXT
	}, {
		classMethod:{
			associate: function(models) {
				
			}
		}
	});
	return News;
};
