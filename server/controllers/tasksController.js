const asyncHandler=require("express-async-handler");
const Task=require("../models/Task");

const getTasks=asyncHandler(async(req, res)=>{
	const tasks=await Task.find();
	res.status(200).json(tasks);
});

const getSingleTask=asyncHandler(async(req, res)=>{
	const task=await Task.findById(req.params.id);
	res.json(task);
});

const createTask=asyncHandler(async(req,res)=>{
	const {task, timeTaken, actualTime, status}=req.body;
	if(task==null||timeTaken==null){
		res.status(400);
		throw new Error("All Fields are Mandatary");
	}
	
	const taskStore=await Task.create({
		task, timeTaken, actualTime, status,
	});
	
	res.status(200).json(taskStore);
});

const updateTask=asyncHandler(async(req,res)=>{
	const task=await Task.findById(req.params.id);
	if(!task){
		res.status(400)
		throw new Error("Task Not Found")
	}
	
	const taskUpdate=await Task.findByIdAndUpdate(
	   req.params.id,
	   {task:req.body.task,
	    timeTaken:req.body.timeTaken,
	    actualTime:req.body.actualTime,
	    status:req.body.status,
		points:req.body.timeTaken-req.body.actualTime},
	   {new:true}
	);
	
	res.status(200).json(taskUpdate);
});

const delTask=asyncHandler(async(req,res)=>{
	const task=await Task.findById(req.params.id);
	if(!task){
		res.status(400);
		throw new Error("Task Not Found")
	}
	
	await Task.deleteOne({_id:req.params.id});
	
	res.status(200).json(task);
});


module.exports={
	getTasks, getSingleTask, createTask, updateTask, delTask
}