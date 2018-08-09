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
  const { email, password, isAdmin } = req.body;

  User
    .create({
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
      return res.sendStatus(500)
    })
});


module.exports = router;
