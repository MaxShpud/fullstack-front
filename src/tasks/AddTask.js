import axios from 'axios';
import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function AddTask() {


        let navigate = useNavigate();

        const [MainTask,setTask]=useState({
            task:"",
            deadline:"",
            progress:""
        })

        const {task,deadline,progress}=MainTask;

        const onInputChange=(event)=>{

            setTask({...MainTask,[event.target.name]:event.target.value});
        };

        const onSubmit=async(event)=>{
            event.preventDefault();
            await axios.post(`http://localhost:8080/task`, MainTask);
            //http://localhost:8080/user
            navigate("/");
        };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">New task</h2>

                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <laber htmlFor="Task" className="form-label">
                        Task
                    </laber>
                    <input 
                    type={"text"} 
                    className="form-control"
                    placeholder="Enter the task"
                    name="task"
                    value={task}
                    onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="mb-3">
                    <laber htmlFor="Deadline" className="form-label">
                        Deadline
                    </laber>
                    <input 
                    type={"text"} 
                    className="form-control"
                    placeholder="Enter the deadline by which you plan to complete the task"
                    name="deadline"
                    value={deadline}
                    onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="mb-3">
                    <laber htmlFor="Progress" className="form-label">
                        Progress
                    </laber>
                    <input 
                    type={"text"} 
                    className="form-control"
                    placeholder="Enter progress of the completed task"
                    name="progress"
                    value={progress}
                    onChange={(event)=>onInputChange(event)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/">
                    Cancel
                </Link>
                </form> 
            </div>
        </div>
    </div>
  )
}
