import React, { useRef } from 'react'
import Navs from './Navs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    
    let em=useRef();
    let pass=useRef();
    let navigate=useNavigate();
    
    const login=async (e)=>{
          e.preventDefault();
          
          let email=em.current.value;
          let password=pass.current.value;
          
        
  
        
          let res=await axios.post('http://localhost:8081/login',{email,password});
          console.log(res);
          navigate(`/dash/:${res.data._id}`);
         
  
    }
  return (
    <div>
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Time Capsule</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </div>
        <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Login</h1>
      <form onSubmit={login}>
          
          <div  className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" ref={em}  className="form-control" name="email" placeholder="email"/>
           </div>
          <div  className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" ref={pass} className="form-control" name="password" placeholder="password"/>
          </div>
         
          <button className="btn btn-sm btn-success">Login</button>
          <p className="fw-light mt-2">Don't have an account,<a href="/signup">SignUp</a></p>
      </form>
    
  </div>

</div>
    </div>
  )
}

export default Login