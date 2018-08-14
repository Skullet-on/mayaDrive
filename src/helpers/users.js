const {User} = require('../models');

const findUserByEmail = (email) => {
	return User.findOne({ where: { email: email.toLowerCase() } })
}

module.exports = {
	findUserByEmail
};
