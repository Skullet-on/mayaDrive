const express = require('express');
const router = express.Router();
const {Faq} = require('../models');
const {QUESTION_MAX_LENGTH, ANSWER_MAX_LENGTH} = require('../utils/variables');

router.get('/', (req, res) => {
	Faq
		.findAll()
		.then((faqs) => { res.status(200).json(faqs) });
});

router.post('/', (req, res) => {
	const { question, answer } = req.body;
	let errors = [];

	if (!question || question.length > QUESTION_MAX_LENGTH) errors.push(`question should contain 1 - ${QUESTION_MAX_LENGTH} characters`);
	if (!answer || answer.length > ANSWER_MAX_LENGTH) errors.push(`answer should contain 1 - ${ANSWER_MAX_LENGTH} characters`);

	if (errors.length) return res.status(400).json({errors: errors});

	Faq
		.create({
			question: req.body.question,
			answer: req.body.answer,
			createdAt: new Date(),
			updatedAt: new Date()
		})
		.then(newFaqs => { res.status(201).json(newFaqs) })
		.catch(err => res.status(500).json({error: err}))
});

router.get('/:id', (req, res) => {
	Faq
		.findById(req.params.id)
		.then(faqs => { res.status(200).json(faqs) })
		.catch(err => res.status(500).send({error: err}))
});

router.put('/:id', (req, res) => {
	const { question, answer } = req.body;
	let errors = [];

	if (!question || question.length > QUESTION_MAX_LENGTH) errors.push(`question should contain 1 - ${QUESTION_MAX_LENGTH} characters`);
	if (!answer || answer.length > ANSWER_MAX_LENGTH) errors.push(`answer should contain 1 - ${ANSWER_MAX_LENGTH} characters`);

	if (errors.length) return res.status(400).json({errors: errors});

	Faq
		.update({
			"question": req.body.question,
			"answer": req.body.answer,
			"updatedAt": new Date()
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
