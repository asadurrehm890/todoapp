const express=require("express");
const {
	getTasks, 
	getSingleTask, 
	createTask, 
	updateTask, 
	delTask
} = require("../controllers/tasksController");

const routes=express.Router();

routes.route('/').get(getTasks).post(createTask);
routes.route('/:id').get(getSingleTask).put(updateTask).delete(delTask);

module.exports = routes;