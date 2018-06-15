const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const news = require('./routes/news');

app.get('/api/status', (req, res) => {
	res.send({status: "server up"});
});

app.use('/api/news', news);

app.listen(port, () => {
	console.log('Server is listening on port ' + port);
});

module.exports = app;
