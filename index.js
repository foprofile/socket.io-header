'use strict';

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var expressHeader = require('express-header');
var io = require('socket.io')(http);

app.use(expressHeader([
    {key: 'X-Alpha', value: 'Alpha'},
    {key: 'X-Beta', value: 'Beta'},
    {key: 'x-gamma', value: 'Gamma'},
    {key: 'x-gamma', value: ''}
]));

io.on('connection', function(){
	console.log('connection');
});

app.get('/', function (req, res) {
	res.send('Hello World');
});

http.listen(3000);