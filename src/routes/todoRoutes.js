module.exports = function (server) {

	var todo_controller = require('../controllers/todoController');

	server.get('/', todo_controller.redirect_home);

	/* registration */
	/* GET request for list of all Book items. */
	server.get('/todo/', todo_controller.todo_list);

	/* GET request for one Book. */
	server.get('/todo/:id', todo_controller.todo_detail);
	
	/* POST request for creating Book. */
	server.post('/todo/create', todo_controller.todo_create_post);
	
	// POST request to delete Book
	server.get('/todo/:id/delete', todo_controller.todo_delete_get);
	
	// POST request to update Book
	server.post('/todo/:id/update', todo_controller.todo_update_post);

};
