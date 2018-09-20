const express = require('express');
const router = express.Router();
const {Faqs} = require('../models');
const passport = require('passport');
const {isAdmin} = require('../middleware');

router.get('/', (req, res) => {
  Faqs
    .findAll()
    .then(faqs => res.status(200).json(faqs))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  const { question, answer } = req.body;

  Faqs
    .create({
      question: question,
      answer: answer
    })
    .then(faq => res.status(201).json(faq))
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(e => e.message)     
        return res.status(400).json(errors)
      }
      return res.sendStatus(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  Faqs
    .findById(req.params.id)
    .then(faqs => res.status(200).json(faqs))
    .catch(err => res.status(500).send({error: err}))
});

router.put('/:id', (req, res) => {
  const { question, answer } = req.body;

  Faqs
    .update({
      "question": question,
      "answer": answer
    },
    {
      where: {id}
    })
    .then(faqs => { return res.status(200).json({ message: 'Successfully edited' }) })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(e => e.message)     
        return res.status(400).json(errors)
      }
      return res.sendStatus(500).json(err)
    })
});

router.delete('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  Faqs
    .destroy( { where: { id: req.body.id}} )
    .then(faqs => { res.status(200).json({ message: 'Successfully deleted' }) })
    .catch(err => res.status(500).send({error: err}))
});

module.exports = router;
