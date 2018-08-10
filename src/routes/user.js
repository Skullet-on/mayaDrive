const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  User
    .findAll()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { firstName, email, password, isAdmin } = req.body;

  User
    .create({
      firstName: firstName,
      email: email,
      password: password,
      isAdmin: isAdmin
    })
    .then(users => res.status(201).json(users))
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(e => e.message)     
        return res.status(400).json(errors)
      }
      return res.sendStatus(500).json(err)
    })
});

router.post('/login', (req, res) => {
  jwt.sign({user: req.user}, 'secretkey', (err, token) => {
    res.json({
      token: token
    })
  })
});

module.exports = router;
