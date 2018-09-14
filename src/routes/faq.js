const express = require('express');
const router = express.Router();
const {Faq} = require('../models');
const {QUESTION_MAX_LENGTH, ANSWER_MAX_LENGTH} = require('../utils/variables');

router.get('/', (req, res) => {
  Faq
    .findAll()
    .then(faqs => res.status(200).json(faqs))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { question, answer } = req.body;

  Faq
    .create({
      question: question,
      answer: answer
    })
    .then(faq => res.status(201).json(faq))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/:id', (req, res) => {
  Faq
    .findById(req.params.id)
    .then(faqs => res.status(200).json(faqs))
    .catch(err => res.status(500).send({error: err}))
});

router.put('/:id', (req, res) => {
  const { question, answer } = req.body;

  Faq
    .update({
      "question": question,
      "answer": answer
    },
    {
      returning: true, where: {id: req.params.id}
    })
    .then(faqs => { res.status(204).json(faqs) })
    .catch(err => res.status(500).send({error: err}))
});

router.delete('/:id', (req, res) => {
  Faq
    .destroy( { where: { id: req.params.id}} )
    .then(faqs => { res.status(200).json({ message: 'Successfully deleted' }) })
    .catch(err => res.status(500).send({error: err}))
});

module.exports = router;
