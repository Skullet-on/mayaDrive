const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const generateHash = (password, hash) => {
  bcrypt.compare(password, hash, (err, res) => {
  	return res;
  });
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: {
  	email: email
  }}).then(user => {
  	console.log(user.password);
  	if (generateHash(password, user.password)) 
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
