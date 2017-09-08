const express = require('express')
	, exphbs = require('express-handlebars')
	, path = require("path");

module.exports = function(server) {

	/* rendering engine, with change extension to .hbs */
	server.engine('.hbs', exphbs({
		extname: '.hbs',
		layoutsDir: path.join(__dirname, '../', 'views', 'layouts'),
		partialsDir: path.join(__dirname, '../', 'views', 'partials'),
		defaultLayout: 'main'
	}));

	/* set view engine */
	server.set('view engine', 'hbs');
	/* views directory to search */
	server.set('views', 'src/views');

}

