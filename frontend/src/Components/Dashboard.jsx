import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Dash.module.css'
import Item from './Item';
function Dashboard() {
    let [mem,setmem]=useState([]);
    let params=useParams();
    let navigate=useNavigate();
    console.log(params.id);
   
    const add=(e)=>{
         navigate(`/addmem/${params.id}`)
    }
    
    const getmem=async (e)=>{
      let res=await axios.get(`http://localhost:8081/getmem/${params.id}`);
      console.log(res.data);
      setmem(res.data);
      
  
    }
    useEffect(()=>{
      getmem();
    },[])
    return (
      <div>
        
         
        
         <Navbar className="bg-body-tertiary"  bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Time Capsules</Navbar.Brand>
          <Nav className="me-auto">
            
              <Nav.Link  onClick={add} href="#" > Add Memory</Nav.Link>
              
            </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mx-3">
          
            </Navbar.Text>
         
            <Navbar.Text className="mx-3">
              Hello, {params.user}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
      
         
     
        
      <div>
      <ul >
        {
            
              mem.map((item,index)=>{
                console.log(item._id);
                  
                  return <Item  getmem={getmem}  img={item.img} key={index}s id={params.id} memo={item.text} mem_id={item._id}  />
              })
        }
      </ul>
      </div></div>
    )
  
}

export default Dashboard