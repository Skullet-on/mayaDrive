const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.get('/', (req, res) => {
  User
    .findAll()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { email, password } = req.body;

  User
    .create({
      email: email,
      password: password
    })
    .then(users => res.status(201).json(users))
    .catch(err => res.status(500).json({error: err.message}))
});


module.exports = router;
