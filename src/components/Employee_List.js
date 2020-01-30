import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Employee_List extends Component {

render() {
    return(
        <div>
            <Link to="/employee_list" className="nav-link"> </Link>
            <h1>Employee List</h1>
            
        </div>
    )
}


}


export default Employee_List;