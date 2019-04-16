const express = require('express');
const router = express.Router();
const {Statistics} = require('../models');

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'robo.testmail19@gmail.com',
    pass: 'Qwerty123456!'
  }
})

router.get('/', (req, res) => {
  Statistics
    .findAll()
    .then(statistics => res.status(200).json(statistics))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
  const { type, version } = req.body;

  Statistics
    .create({
      type: type,
      version: version
    })
    .then(statistic => res.status(201).json(statistic))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/sendmail/', (req, res) => {
  const { email, name, subject, message } = req.body;
  const body = 'Email: <' + email + '>\nName: ' + name + '\nMessage: ' + message;
  var mailOptions = {
    from: 'RoboTest <robo.testmail19@gmail.com>',
    to: 'skullet-on@mail.ru',
    subject: subject,
    text: body
  }
  transporter.sendMail(mailOptions, function (err, res) {
    if(err){
      res.status(500).json({error: err})
      console.log(err);
    } else {
      res.status(200).json({message: 'Send successfull!'})
      console.log('Email Sent');
    }
  })
});

module.exports = router;
