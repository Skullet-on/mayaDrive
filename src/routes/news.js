const express = require('express');
const router = express.Router();
const models = require('../../db/models').db;
const bodyparser = require('body-parser');

router.use(bodyparser.json());

router.get('/', (req, res) => {
	models.News.findAll().then((news) => {
		res.json(news);
	});
});

router.post('/', (req, res) => {
	const title = req.body.title;
	const text = req.body.text;
	console.log(title);
	models.News.create({
		title: req.body.title,
		text: req.body.text,
		createdAt: new Date(),
		updatedAt: new Date()
	})
	.then(newNews => {
		res.json(newNews);
	})
});

module.exports = router;
