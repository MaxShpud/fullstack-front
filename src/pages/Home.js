import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { ADRESS } from '../consts';


export default function Home() {
    const [users, setUsers] = useState([]);
  
    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    };
  
    const deleteTask = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle shadow"
            >
              <thead>
                <tr>
                  <th scope="col">N.O.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Task</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{user.name}</td>
                    <td>{user.task}</td>
                    
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="btn btn-primary mx-2"
                        to={`/viewtask/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/edittask/${user.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteTask(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }