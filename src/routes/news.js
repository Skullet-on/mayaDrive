const express = require('express');
const router = express.Router();
const {News} = require('../models');
const {TITLE_MAX_LENGTH, TEXT_MAX_LENGTH} = require('../utils/variables');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secret = process.env.SECRET_KEY;
const {isAdmin} = require('../middleware');

router.get('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  News
    .findAll()
    .then((news) => res.status(200).json(news))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { title, text } = req.body;

  News
    .create({
      title: title,
      text: text
    })
    .then(news => res.status(201).json(news))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/:id', (req, res) => {
  News
    .findById(req.params.id)
    .then(news => { res.status(200).json(news) })
    .catch(err => res.status(500).send({error: err}))
});

router.put('/:id', (req, res) => {
  const { title, text } = req.body;

  News
    .update({
      "title": title,
      "text": text
    },
    {
      returning: true, where: {id: req.params.id}
    })
    .then(news => res.status(204).json(news))
    .catch(err => res.status(500).send({error: err}))
});

router.delete('/:id', (req, res) => {
  News
    .destroy( { where: { id: req.params.id}} )
    .then(news => res.status(200).json({ message: 'Successfully deleted' }))
    .catch(err => res.status(500).send({error: err}))
});

module.exports = router;
