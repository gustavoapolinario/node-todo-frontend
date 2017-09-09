'use strict';

const TodoRequestOptions = require('./TodoRequestOptions')
	, request = require('request')

class TodoApi {

	constructor(todoRequestOptions) {
		this.todoRequestOptions = todoRequestOptions ? todoRequestOptions : new TodoRequestOptions();
	}

	getList(filter) {
		return new Promise( (resolve, reject) => {
			request.get(this.todoRequestOptions.getRequestOption(filter),
				(error, response, body) => { error ? reject(error) : resolve(body, response) }
			)
		})
	}

	getDetail(filter) {
		return new Promise( (resolve, reject) => {
			request.get(this.todoRequestOptions.getRequestOption(filter),
				(error, response, body) => { error ? reject(error) : resolve(body, response) }
			)
		})
		
	}

	create(params) {
		return new Promise( (resolve, reject) => {
			request.post(this.todoRequestOptions.getRequestOption(null, params),
				(error, response, body) => { error ? reject(error) : resolve(body, response) }
			)
		})
	}

	update(filter, params) {
		return new Promise( (resolve, reject) => {
			request.put(this.todoRequestOptions.getRequestOption(filter, params),
				(error, response, body) => { error ? reject(error) : resolve(body, response) }
			)
		})
		
	}

	delete(filter) {
		return new Promise( (resolve, reject) => {
			request.del(this.todoRequestOptions.getRequestOption(filter),
				(error, response, body) => { error ? reject(error) : resolve(body, response) }
			)
		})
	}

}

module.exports = TodoApi;
