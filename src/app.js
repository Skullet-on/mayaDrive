const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const news = require('./routes/news');
const state = require('./routes/state');
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use('/api/', state);
app.use('/api/news', news);

app.listen(port, () => {
	console.log('Server is listening on port ' + port);
});

module.exports = app;
