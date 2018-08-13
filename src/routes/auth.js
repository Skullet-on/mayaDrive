const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const generateHash = (password) => {
  return bcrypt.hash(password, 10);
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: {
  	email: email
  }}).then(user => {
  	console.log(user.password);
  	if (bcrypt.compare(password, user.password)) 
  		console.log("Found!");
  	else
  		console.log("Not found!");
  })
  jwt.sign({user: req.user}, 'secretkey', (err, token) => {
    res.json({
      token: token
    })
  })
});

module.exports = router;
