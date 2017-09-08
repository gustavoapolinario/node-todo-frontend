'use strict';
const title_default = 'Simple Node.js With Mustache example'
	, TodoApi = require('../api/TodoApi')

exports.redirect_home = function(req, res) {
	res.redirect('/todo/');
}

exports.todo_list = function(req, res) {

	var callback = function(error, response, body) {
		if(error) res.send('Error. ' + error);
		else {
			res.render('todoList', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoList: body
			});
		}
	}

	var filter = {}
	if(req.query) {
		if(req.query.description) filter.description = req.query.description
	}

	new TodoApi().getList( filter, callback );

};

exports.todo_detail = function(req, res) {

	var callback = function(error, response, body) {
		if(error) res.send('Error. ' + error);
		else {
			res.render('todoItem', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoItem: body
			});
		}
	}

	var filter = {id: req.params.id };
	
	new TodoApi().getDetail( filter, callback );

};

exports.todo_create_post = function(req, res) {

	var callback = function(error, response, body) {
		if(error) res.send('Error. ' + error);
		else {
			console.log(body)
			res.render('todoItem', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoItem: body
			});
		}
	}

	var params = {
		description: req.body.description,
		done: req.body.done
	}

	new TodoApi().create( params, callback );

};

exports.todo_delete_get = function(req, res) {
	console.log('delete_get')

	var callback = function(error, response, body) {
		console.log('delete_get_callback')
		if(error) res.send('Error. ' + error);
		else {
			res.redirect('/todo/');
		}
	}

	var filter = {id: req.params.id };
	
	new TodoApi().delete( filter, callback );
};

exports.todo_update_post = function(req, res) {

	var callback = function(error, response, body) {
		if(error) res.send('Error. ' + error);
		else {
			console.log(body)
			res.render('todoItem', {
				title: title_default + ' - List',
				name: 'Gustavo Apolinario',
				todoItem: body
			});
		}
	}

	var params = {
		description: req.body.description,
		done: req.body.done
	}
	var filter = {id: req.params.id };

	new TodoApi().update( filter, params, callback );
};
