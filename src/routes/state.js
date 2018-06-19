const express = require('express');
const router = express.Router();
const models = require('../../db/models').db;

router.get('/api/status', (req, res) => {
	res.send({status: "server up"});
});

module.exports = router;
