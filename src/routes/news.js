const express = require('express');
const router = express.Router();
const {News} = require('../models');

router.get('/', (req, res) => {
	News
	.findAll()
	.then((news) => {
		res.status(200).json(news);
	});
});

router.post('/', (req, res) => {
	!req.body.title ? res.status(400).json({error: "'title' can not be empty"})
		: req.body.title.lenght > 10 ? res.status(400).json({error: "'title' is too long"}) 
		: !req.body.text ? res.status(400).json({error: "'text' can not be empty"})
		: req.body.title.lenght > 10 ? res.status(400).json({error: "'text' is too long"})
		: News
		.create({
			title: req.body.title,
			text: req.body.text,
			createdAt: new Date(),
			updatedAt: new Date()
		})
		.then(newNews => {
			res.status(201).json(newNews);
		})
		.catch(err => res.status(500).json({error: err}))
});

module.exports = router;
