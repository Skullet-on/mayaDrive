const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.get('/', (req, res) => {
	User
		.findAll()
		.then(users => res.status(200).json(users))
		.catch(err => res.status(500).json({error: err}))
});

module.exports = router;
