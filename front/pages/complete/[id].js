import { useState } from 'react';
import { useRouter } from 'next/router';

function Confirm(props){
	const router = useRouter();
	
    const [task, setTask] = useState(props.tasks.task);
    const [timeTaken, setTimeTake] = useState(props.tasks.timeTaken);
    const [actualTime, setActualTime] = useState(0);
    const [status, setStatus] = useState('complete');
	
	const handleSubmit = async(event) => {
       event.preventDefault();
	   
	   
	   try {
      const res = await fetch(`http://localhost:8000/api/tasks/${props.tasks._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task,
          timeTaken,
		  actualTime,
		  status,
        })
      })

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      router.push('/');
    } catch (error) {
      
      alert('Failed to update profile')
    }
	}
	return(
	  <>
	  
	    <form className="mx700" onSubmit={handleSubmit}>
	     <label className="mb-3 form-label w-100">
		   Enter your Task
		   <input value={task} onChange={(e)=>setTask(e.target.value)}  type="text" className="form-control" />
		 </label>
		 
		  <label className="mb-3 form-label w-100">
		   Time taken in minutes 
		   <input value={timeTaken} onChange={(e)=>setTimeTake(parseInt(e.target.value))}  type="number" className="form-control" />
		 </label>
		 
		 <label className="mb-3 form-label w-100">
		   Actual Time taken in minutes 
		   <input value={actualTime} onChange={(e)=>setActualTime(parseInt(e.target.value))}  type="number" className="form-control" />
		 </label>
		
		  
		 
		 <button className="btn btn-dark" type="submit">Submit</button>
	   </form>
	  </>
	)
}

export default Confirm;

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:8000/api/tasks`);
  const data = await response.json();

  const thePaths = data.map((task) => {
    return { params: { id: task._id } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:8000/api/tasks/${context.params.id}`);
  const data = await response.json();


  return {
    props: {
      tasks: data,
    }
  }
}