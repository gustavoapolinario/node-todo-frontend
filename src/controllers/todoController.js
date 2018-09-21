'use strict';
const title_default = 'Simple Node.js With Mustache example'
	, TodoApi = require('../api/TodoApi')

exports.redirect_home = function(req, res) {
	res.redirect('/todo/');
}

exports.health_check = function(req, res) {
	res.send("OK");
}

exports.todo_list = function(req, res) {

	var filter = {}
	if(req.query) {
		if(req.query.description) filter.description = req.query.description
	}
	new TodoApi().getList( filter )
		.then( (body, response) => {
			res.render('todoList', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoList: body
			});
		})
		.catch(error => { res.send('Error. ' + error) });

};

exports.todo_detail = function(req, res) {

	var filter = {id: req.params.id };

	new TodoApi().getDetail( filter )
		.then( (body, response) => {
			res.render('todoItem', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoItem: body
			});
		})
		.catch(error => { res.send('Error. ' + error) });

};

exports.todo_create_post = function(req, res) {

	var params = {
		description: req.body.description,
		number: req.body.number,
		done: req.body.done
	}

	new TodoApi().create( params )
		.then( (body, response) => {
			res.redirect('/todo/' + body.id);
		})
		.catch(error => { res.send('Error. ' + error) });

};

exports.todo_delete_get = function(req, res) {

	var filter = {id: req.params.id };

	new TodoApi().delete( filter )
		.then( (body, response) => {
			res.redirect('/todo/');
		})
		.catch(error => { res.send('Error. ' + error) });
};

exports.todo_update_post = function(req, res) {

	var params = {
		description: req.body.description,
		number: req.body.number,
		done: req.body.done
	}
	var filter = {id: req.params.id };

	new TodoApi().update( filter, params )
		.then( (body, response) => {
			res.render('todoItem', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoItem: body
			});
		})
		.catch(error => { res.send('Error. ' + error) });
};
