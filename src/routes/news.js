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
	const TITLE_MAX_LENGTH = 200;
	const TEXT_MAX_LENGTH = 1000;
	const title = req.body.title;
	const text = req.body.text;
	let errors = [];

	if (!title) errors.push('title is empty');
	if (!title || title.length > TITLE_MAX_LENGTH) errors.push(`title should contain no more than ${TITLE_MAX_LENGTH} characters`);
	if (!text) errors.push('text is empty');
	if (!text || text.length > TEXT_MAX_LENGTH) errors.push(`text should contain no more than ${TEXT_MAX_LENGTH} characters`);

	if (errors.length) return res.status(400).json({errors: errors});

	News
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
