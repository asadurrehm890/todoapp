const express=require('express');
const dotenv=require('dotenv').config();
const connectDB=require("./config/db");
const cors = require('cors');

connectDB();
const app=express();

app.use(cors());
app.use(express.json())
app.use('/api/tasks', require('./routes/taskRoutes'));

const port=process.env.PORT || 8001;

app.listen(port,()=>{
	console.log(`localhost:${port}`)
});