const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.get('/', (req, res) => {
	User
		.findAll()
		.then(users => res.status(200).json(users))
		.catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
	const { email, password, password_confirmation } = req.body;

	User
		.create({
			email: email,
			password: password,
			password_confirmation: password_confirmation,
		})
		.then(faq => res.status(201).json(faq))
		.catch(err => res.status(500).json({error: err}))
});


module.exports = router;
