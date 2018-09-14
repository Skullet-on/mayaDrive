const express = require('express');
const router = express.Router();
const {Statistic} = require('../models');

router.get('/', (req, res) => {
  Statistic
    .findAll()
    .then(statistics => res.status(200).json(statistics))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { type, version } = req.body;

  Statistic
    .create({
      type: type,
      version: version
    })
    .then(statistic => res.status(201).json(statistic))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
