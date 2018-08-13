const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email: email.toLowerCase() } })
    .then(user => bcrypt.compare(password, user.password))
    .then(match => {
      if (!match) return res.status(401).json("Wrong Email or Password");
      jwt.sign({user: req.user}, 'secretkey', (err, token) => {
        res.status(200).json({
          token: token
        })
      })
    })
    .catch(err => { res.status(500).json("Couldn't find this account") })
});

module.exports = router;
