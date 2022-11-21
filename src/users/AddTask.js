import axios from 'axios';
import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function AddTask() {

        let navigate = useNavigate()

        const [user,setTask]=useState({
            name:"",
            task:"",
            email:""
        })

        const {name,task,email}=user;

        const onInputChange=(e)=>{

            setTask({...user,[e.target.name]:e.target.value});
        };

        const onSubmit=async(e)=>{
            e.preventDefault();
            await axios.post("http://localhost:8080/user",user);
            navigate("/");
        };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">New task</h2>

                <form onSubmit={(e) => onSubmit(e)}>
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
                    onChange={(e)=>onInputChange(e)}/>
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
                    onChange={(e)=>onInputChange(e)}/>
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
                    onChange={(e)=>onInputChange(e)}/>
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
