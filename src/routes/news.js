const express = require('express');
const router = express.Router();
const {News} = require('../models').db;

router.get('/', (req, res) => {
	News
	.findAll()
	.then((news) => {
		res.status(200).json(news);
	});
});

router.post('/', (req, res) => {
	News
	.create({
		title: req.body.title,
		text: req.body.text,
		createdAt: new Date(),
		updatedAt: new Date()
	})
	.then(newNews => {
		res.status(200).json(newNews);
	})
});

module.exports = router;
