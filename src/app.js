const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const news = require('./routes/news');
const faq = require('./routes/faq');
const state = require('./routes/state');
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use('/api/', state);
app.use('/api/news', news);
app.use('/api/faq', faq);

app.listen(port, () => {
	console.log('Server is listening on port ' + port);
});

module.exports = app;
