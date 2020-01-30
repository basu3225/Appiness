import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';

class Dashboard extends Component {

    constructor() {
        super()

        this.state = {
            
                user: [
                    {
                        "id":1,
                        "name":"test1",
                        "age" : "11",
                        "gender":"male",
                        "email" : "test1@gmail.com", "phoneNo" : "9415346313"
                    },
                    {
                        "id" : 2,
                        "name":"test2",
                        "age" : "12",
                        "gender":"male",
                        "email" : "test2@gmail.com", "phoneNo" : "9415346314"
                    },
                    {
                        "id":3,
                        "name":"test3",
                        
                        "age" : "13",
                        "gender":"male",
                        "email" : "test3@gmail.com", "phoneNo" : "9415346315"
                    },
                    {
                        "id":4,
                        "name":"test4",
                        "age" : "14",
                        "gender":"male",
                        "email" : "test4@gmail.com", "phoneNo" : "9415346316"
                    },
                    {
                        "id":5,
                        "name":"test5",
                        "age" : "15",
                        "gender":"male",
                        "email" : "test5@gmail.com", "phoneNo" : "9415346317"
                    },
                    {
                        "id":6,
                        "name":"test6",
                        "age" : "16",
                        "gender":"male",
                        "email" : "test6@gmail.com", "phoneNo" : "9415346318"
                    }
                
                ]
            }
                
        }
    

render() {
    return(
        <div>
            <Link to="/dashboard" className="nav-link"> </Link>
            
            <h1>Dashboard Page</h1>
            <h2>Employee List</h2>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                           
                        </tr>
                    </thead>

                    <tbody>
                         {
                            this.state.user.map((name,id) => 
                            <tr key={name.id}>
                               
                                <td>{name.id}</td>
                                <td>{name.name}</td>
                                <td>{name.age}</td>
                                <td>{name.gender}</td>
                                <td>{name.email}</td>
                                
                            </tr> 
                           
                        )}
                        
                    </tbody>
                </table>
            
        </div>
    )
}


}


export default Dashboard;