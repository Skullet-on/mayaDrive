const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require('body-parser');
const { faq, news, state, user, auth } = require('./routes');

app.use(bodyparser.json());

app.use('/api/', state)
  .use('/api/news', news)
  .use('/api/faq', faq)
  .use('/api/users', user)
  .use('/api/auth', auth);

app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});

module.exports = app;
