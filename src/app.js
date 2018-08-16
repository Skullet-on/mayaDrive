const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require('body-parser');
const passport = require('passport');
const { faq, news, state, user, auth } = require('./routes');
const { strategy } = require('./middleware');

passport.use(strategy);

app.use(bodyparser.json())
  .use(passport.initialize())
  .use('/api/', state)
  .use('/api/news', news)
  .use('/api/faq', faq)
  .use('/api/users', user)
  .use('/api/auth', auth);

app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});

module.exports = app;
