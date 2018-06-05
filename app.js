var express = require('express');
var app = express();

app.get('/api/status', function(req, res) {
	res.send({status: "server up"});
});

app.listen(3000, function () {
	console.log('Server is listening on port 3000');
});
