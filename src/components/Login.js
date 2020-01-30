import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      usernameError:"",
      passwordError:""
    };
  }


  valid() {
    if(!this.state.username.includes("@") && this.state.password.length < 5 && this.state.username=="" && this.state.password=="")
    {
        this.setState({usernameError:"Invalid username", passwordError:"password length should be more than 5", usernameError:"username is empty", passwordError:"password is empty"})
        
    }
    else if(!this.state.username.includes("@"))
    {
        this.setState({usernameError:"Invalid username"})
    }

    else if(this.state.password.length < 5)
    {
        this.setState({passwordError:"password length should be more than 5"})
    }
    else if( this.state.username=="")
    {
        this.setState({usernameError:"username is empty"})
    }

    else if(this.state.password=="")
    {
        this.setState({passwordError:"password is empty"})
    }
   
    else {
        return true
    }
  }


  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.valid()) {
        
        const {username, password} = this.state
        if(username==="hruday@gmail.com" && password==='hruday123')
        {
            window.location.href="/dashboard"
        } else {
            window.location.href="/"
        }
    }
   
    
  };


  render() {
    const {username, password} = this.state

    return (
        <div style={{backgroundColor:'wheat', paddingBottom:'50px'}}>
             <Container className="pt-5" >   
                 <Row>
                    <Col xl={3} lg={3} md={3} sm={3} xs={12}> </Col>
                         <Link to="/" className="nav-link"> </Link>  
                        
                     <Col xl={6} lg={6} md={6} sm={6} xs={12} >
                       
                        <Form onSubmit={this.handleSubmit} redirect to="/Employee_List" style={{backgroundColor:'skyblue', padding:'20px'}}>
                        <h2>Login Form</h2>
                             <Form.Group controlId="formBasicEmail">
                                 <Form.Label>Username</Form.Label>
                                     <Form.Control type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleUsernameChange} />
                                         <p style={{color:"red",fontSize:'14'}}>{this.state.usernameError}</p>
                             </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                     <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                                        <p style={{color:"red",fontSize:'14'}}>{this.state.passwordError}</p>
                            </Form.Group>
                                <div className="text-center">
                            <Button id="login_btn" className="btn btn-success btn-md" type="submit" >Login</Button>
                            </div>
                         </Form>
                    </Col>  

                    <Col xl={3} lg={3} md={3} sm={3} xs={12}></Col>
                </Row>

            </Container>
        </div>
    );
  }
}

export default Login;
