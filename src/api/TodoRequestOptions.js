'use strict';

class TodoRequestOptions {
	constructor(host, todoUrl) {
		this.host = host ? host : 'http://' + 
 			(process.env.TODO_BACKEND ? process.env.TODO_BACKEND : 'localhost') + ':' + 
 			(process.env.TODO_BACKEND_PORT ? process.env.TODO_BACKEND_PORT : '3001') + '/';
		this.todoUrl = todoUrl ? todoUrl : 'todo/';
	}

	getUrlHost() {
		return this.host;
	}
	getTodoUrl() {
		return this.todoUrl;
	}
	getTodoIdUrl(filter) {
		return filter && filter.id ? filter.id + '/' : '';
	}
	getQueryFilters(filter) {
		var queryFilters = '';
		if ( filter ) {
			queryFilters += filter.description ? '&description__regex=/' + filter.description + '/' : '';
		}

		return queryFilters ? '?' + queryFilters : ''
	}

	getUrl(filter) {
		return this.getUrlHost() + this.getTodoUrl() + this.getTodoIdUrl(filter) + this.getQueryFilters(filter)
	}
	getHeaders() {
		return { 'Content-Type': 'application/json' }
	}
	jsonFormat() {
		return true;
	}



	getRequestOption(filter, params) {
		return {
			url: this.getUrl(filter)
			,headers: this.getHeaders()
			,json: this.jsonFormat()
			,form: params ? params : null
		};
	}

}

module.exports = TodoRequestOptions;
