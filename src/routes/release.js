const express = require('express');
const router = express.Router();
const {Releases} = require('../models');

router.get('/', (req, res) => {
  Releases
    .findAll({
       order: [
        ['date', 'DESC'],
      ]
    })
    .then(releases => res.status(200).json(releases))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { url, version, date, whatsnew } = req.body;

  Releases
    .create({
      url: url,
      version: version,
      date: date,
      whatsnew: whatsnew
    })
    .then(release => res.status(201).json(release))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
