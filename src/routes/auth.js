const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const {findUserByEmail} = require('../helpers/users');
const secret = process.env.SECRET_KEY;

router.post('', (req, res) => {
  const { email, password } = req.body;
  let payload;

  findUserByEmail(email)
    .then(user => {
      if (!user) return res.status(400).json("User not found");
      payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        isAdmin: user.isAdmin
      };
      return bcrypt.compare(password, user.password);
    })
    .then(match => {
      if (!match) return res.status(401).json("Wrong Email or Password");
      jwt.sign(payload, secret, (err, token) => {
        return res.status(200).json({ token })
      })
    })
    .catch(err => res.status(500).json("Server error"))
});

module.exports = router;
