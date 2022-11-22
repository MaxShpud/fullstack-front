import axios from 'axios';
import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ADRESS } from '../consts';

export default function AddTask() {

        let navigate = useNavigate()

        const [user,setTask]=useState({
            name:"",
            task:"",
            email:""
        })

        const {name,task,email}=user;

        const onInputChange=(event)=>{

            setTask({...user,[event.target.name]:event.target.value});
        };

        const onSubmit=async(event)=>{
            event.preventDefault();
            await axios.post("http://localhost:8080/user", user);
            navigate("/");
        };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">New task</h2>

                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <laber htmlFor="Name" className="form-label">
                        Name
                    </laber>
                    <input 
                    type={"text"} 
                    className="form-control"
                    placeholder="Enter the name of who the task belongs to "
                    name="name"
                    value={name}
                    onChange={(event)=>onInputChange(event)}/>
                </div>
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
                    <laber htmlFor="Email" className="form-label">
                        E-mail
                    </laber>
                    <input 
                    type={"text"} 
                    className="form-control"

                    
                    placeholder="Enter your e-mail address"
                    name="email"
                    value={email}
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
