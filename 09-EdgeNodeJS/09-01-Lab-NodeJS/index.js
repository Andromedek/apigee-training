const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/example', (request, response) => {
	var name = request.query.name;
	var jsonData = {message: "Hello "+name};
	response.json(jsonData);
});

let server = app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port %d', server.address().port) } );


