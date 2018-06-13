const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const models = require('../models').db;

app.get('/api/status', (req, res) => {
	res.send({status: "server up"});
});

app.get('/api/news', (req, res) => {
	models.News.findAll().then((news) => {
		res.json(news);
	});
});

app.listen(port, () => {
	console.log('Server is listening on port ' + port);
});

module.exports = app;
