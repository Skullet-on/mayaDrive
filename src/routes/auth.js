const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
  	.then(user => bcrypt.compare(password, user.password))
  	.then(match => {
  		if (!match) return res.status(401).json("Wrong Email or Password");
  		jwt.sign({user: req.user}, 'secretkey', (err, token) => {
		    res.json({
		      token: token
		    })
		  })
  	})
});

module.exports = router;
