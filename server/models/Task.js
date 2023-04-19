const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
	task:{type:String, required:true},
	timeTaken:{type:Number, required:true},
	actualTime:{type:Number, required:false},
	status:{type:String, required:true, default:"working"},
	points:{type:Number, required:false},
},{timestamps:true});


const Task=mongoose.model('Task',taskSchema);

module.exports=Task;

