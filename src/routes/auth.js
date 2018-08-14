const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

router.post('', (req, res) => {
  const { email, password } = req.body;

  const findUserByEmail = (email) => {
    return User.findOne({ where: { email: email.toLowerCase() } })
  }

  findUserByEmail(email)
    .then(user => {
      if (!user) return res.status(400).json("User not found");
      return bcrypt.compare(password, user.password)
    })
    .then(match => {
      if (!match) return res.status(401).json("Wrong Email or Password");
      return jwt.sign({user: req.user}, 'secretkey', (err, token) => {
        return res.status(200).json({
          token: token
        })
      })
    })
    .catch(err => res.status(500).json("Server error"))
});

module.exports = router;
