const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/api/status', (req, res) => {
	res.send({status: "server up"});
});

app.listen(port, () => {
	console.log('Server is listening on port 3000');
});
