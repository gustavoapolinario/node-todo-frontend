'use strict';

const TodoRequestOptions = require('./TodoRequestOptions')
	, request = require('request')

class TodoApi {

	constructor(todoRequestOptions) {
		this.todoRequestOptions = todoRequestOptions ? todoRequestOptions : new TodoRequestOptions();
	}

	getList(filter, callback) {
		request.get(this.todoRequestOptions.getRequestOption(filter), callback)
	}

	getDetail(filter, callback) {
		request.get(this.todoRequestOptions.getRequestOption(filter), callback)
	}

	create(params, callback) {
		request.post(this.todoRequestOptions.getRequestOption(null, params), callback)
	}

	update(filter, params, callback) {
		request.put(this.todoRequestOptions.getRequestOption(filter, params), callback)
	}

	delete(filter, callback) {
		request.del(this.todoRequestOptions.getRequestOption(filter), callback)
	}

}

module.exports = TodoApi;
