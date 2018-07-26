module.exports = (sequelize, DataTypes) => {
	const Faq = sequelize.define('Faq', {
		question: {
			allowNull: false,
			type: DataTypes.STRING
		},
		answer: {
			allowNull: false,
			type: DataTypes.STRING
		}
	});
	return Faq;
};
