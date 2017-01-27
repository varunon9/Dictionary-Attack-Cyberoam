var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.listen(4000, function() {
	console.log("Listening on port: 4000");
});

app.post('/login', function(req, res) {
	console.log('Post: ', req.body);
	res.send('OK');
    res.end();
});

app.get('/login', function(req, res) {
	res.send('OK');
	res.end();
});