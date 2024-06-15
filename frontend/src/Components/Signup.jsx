import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    let name=useRef();
  let ema=useRef();
  let pass=useRef();
  let navigate=useNavigate();
  
  const signup=async (e)=>{
        e.preventDefault();
        let username=name.current.value;
        let email=ema.current.value;
        let password=pass.current.value;
        
      

      
        let res=await axios.post('http://localhost:8081/register',{username,email,password});
        console.log(res);
        navigate('/login');

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
   <h1 className="display-6">Signup</h1>
      <form onSubmit={signup}>
          <div className="mb-3">
           <label htmlFor="username" className="form-label">Username</label>
           <input type="text" ref={name}className="form-control" name="username" placeholder="username"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" ref={ema}  className="form-control" name="email" placeholder="email"/>
           </div>
           <div  className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" ref={pass} className="form-control" name="password" placeholder="password"/>
          </div>
          
          
          <button className="btn btn-sm btn-success">Signup</button>
          <p className="fw-light mt-2">Don't have an account,<a href="/signup">SignUp</a></p>
      </form>
    
  </div>

</div>
    </div>
  )
}

export default Signup;