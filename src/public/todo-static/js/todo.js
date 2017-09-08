'use strict';

var todo = {}
todo.addItem = function() {
	var description = $('#description');
	if( description == '' ) {
		alert('Input the description of task first.')
	}
}