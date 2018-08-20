const express = require('express');
const router = express.Router();
const {News} = require('../models');
const passport = require('passport');
const secret = process.env.SECRET_KEY;
const {isAdmin} = require('../middleware');

router.get('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  News
    .findAll()
    .then((news) => res.status(200).json(news))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  const { title, text } = req.body;

  News
    .create({
      title: title,
      text: text
    })
    .then(news => res.status(201).json(news))
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(e => e.message)     
        return res.status(400).json(errors)
      }
      return res.sendStatus(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  News
    .findById(req.params.id)
    .then(news => { res.status(200).json(news) })
    .catch(err => res.status(500).send({error: err}))
});

router.put('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  const { id, title, text } = req.body;

  News
    .update({
      "title": title,
      "text": text
    },
    {
      where: {id}
    })
    .then(news => {return res.status(200).json({ message: 'Successfully edited' })})
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(e => e.message)     
        return res.status(400).json(errors)
      }
      return res.sendStatus(500).json(err)
    })
});

router.delete('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  News
    .destroy( { where: { id: req.body.id}} )
    .then(news => res.status(200).json({ message: 'Successfully deleted' }))
    .catch(err => res.status(500).send({error: err}))
});

module.exports = router;
