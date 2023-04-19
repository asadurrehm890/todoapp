import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function HomePage(props) {
  const router = useRouter();
  	
  const [task, setTask] = useState('');
  const [timeTaken, setTimeTake] = useState(0);
  
   const [mdata, setData] = useState(props.data);
  
  const handleSubmit=async(event)=>{
	  event.preventDefault();
	  try{
		  const response=await fetch('http://localhost:8000/api/tasks', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task, timeTaken })
		  });
		  
		   if (response.ok) {
       
	    const response = await fetch('http://localhost:8000/api/tasks');
      const data = await response.json();
      setData(data);
	   
      } else {
        
        console.log('Error sending message.');
      }
	  }catch(err){
		  console.log('Error sending message:', err);
	  }
  };
  
 
  const handleDelete=async(id)=>{
	 event.preventDefault();  
	 
	 try {
      const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        const response = await fetch('http://localhost:8000/api/tasks');
      const data = await response.json();
      setData(data);
		
      } else {
        console.log(`Failed to delete item with ID ${id}`)
      }
    } catch (error) {
      console.error(error)
    }
  };
  
  return (
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
		
		 
		 <button className="btn btn-dark" type="submit">Submit</button>
	   </form>
	   
	   <table className="my-3 table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Time Taken</th>
      <th scope="col">Actual Time</th>
      <th scope="col">Status</th>
      <th scope="col">Points</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {mdata.map((item)=>(
    <tr key={item._id}>
      <td>{item.task}</td>
      <td>{item.timeTaken}</td>
      <td>{item.actualTime}</td>
      <td>{item.status}</td>
      <td>{item.points}</td>
      <td className="d-flex">
	    <Link className="btn btn-success" href={`/complete/${item._id}`}>Complete</Link>
		<button onClick={()=>handleDelete(item._id)} className="btn btn-danger ms-2">Delete</button>
	  </td>
     
    </tr>
  ))}
  </tbody>
</table>
	 </>
  )
}

export default HomePage



export const getStaticProps = async () => {
	const response = await fetch('http://localhost:8000/api/tasks');
  const data = await response.json();

  // Pass data as props to the component
  return {
    props: {
      data
    },
	revalidate: 10
  }
}