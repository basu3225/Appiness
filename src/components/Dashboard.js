import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';

import { connect } from 'react-redux';

class Dashboard extends Component {

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
                            this.props.usr.map((name,id) => 
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


const mapstatesToProps = state => {
    return {
        usr:state.user
    }
}



export default connect(mapstatesToProps) (Dashboard);