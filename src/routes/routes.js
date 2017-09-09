const express = require('express')
    , path = require('path');

module.exports = function(server) {

    require('./todoRoutes')(server)

    server.use("/static", express.static(path.join(__dirname, '../public/static')));
    server.use("/todo/static", express.static(path.join(__dirname, '../public/todo-static')));

}