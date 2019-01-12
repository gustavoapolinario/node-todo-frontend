module.exports = function (server) {

	var todo_controller = require('../controllers/todoController');

	server.get('/', todo_controller.redirect_home);
	server.get('/health_check', todo_controller.health_check);
	server.get('/todo/', todo_controller.todo_list);
	server.get('/todo/cpu_overload', todo_controller.cpu_overload);
	server.get('/todo/:id', todo_controller.todo_detail);
	server.get('/todo/:id/delete', todo_controller.todo_delete_get);

	server.post('/todo/create', todo_controller.todo_create_post);
	server.post('/todo/:id/update', todo_controller.todo_update_post);

};
