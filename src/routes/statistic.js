const express = require('express');
const router = express.Router();
const {Statistics} = require('../models');

router.get('/', (req, res) => {
  Statistics
    .findAll()
    .then(statistics => res.status(200).json(statistics))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { type, version } = req.body;

  Statistics
    .create({
      type: type,
      version: version
    })
    .then(statistic => res.status(201).json(statistic))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/sendmail/', (req, res) => {
  const { email, name, subject, message } = req.body;
});

module.exports = router;
