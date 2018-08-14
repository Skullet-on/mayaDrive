const express = require('express');
const router = express.Router();
const {News} = require('../models');
const {TITLE_MAX_LENGTH, TEXT_MAX_LENGTH} = require('../utils/variables');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  const bearerHeader = req.headers.authorization;
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(500).send({ err })
  
    News
      .findAll()
      .then((news) => res.status(200).json(news))
      .catch(err => res.status(500).json({error: err}))
  })
});

router.post('/', (req, res) => {
  const { title, text } = req.body;
  let errors = [];

  if (!title || title.length > TITLE_MAX_LENGTH) errors.push(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
  if (!text || text.length > TEXT_MAX_LENGTH) errors.push(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);

  if (errors.length) return res.status(400).json({errors: errors});

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
  let errors = [];

  if (!title || title.length > TITLE_MAX_LENGTH) errors.push(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
  if (!text || text.length > TEXT_MAX_LENGTH) errors.push(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);

  if (errors.length) return res.status(400).json({errors: errors});

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
