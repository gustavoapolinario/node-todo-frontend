'use strict';
const helpers = require('handlebars-helpers')();
var server = require('express')();

require('./config/handlebars')(server);
require('./config/bodyparser')(server);
require('./routes/routes')(server);

server.listen(3000, function () {
    console.log("Express server listening on port 3000");
});
