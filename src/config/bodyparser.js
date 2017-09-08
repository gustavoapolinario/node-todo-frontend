const bodyParser = require('body-parser')

module.exports = function(server) {
	server.use(bodyParser.urlencoded({ extended: true }))
	server.use(bodyParser.json())
}