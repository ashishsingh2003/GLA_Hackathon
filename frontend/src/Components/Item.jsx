import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Item(props) {
    
    let navigate=useNavigate();
   const delet=async (e)=>{
    e.preventDefault();
    let res=await axios.post(`http://localhost:8081/delete/${props.mem_id}`);
    console.log(res);
    console.log("deleted");
     props.getmem();
   }
   const edit=async (e)=>{
    e.preventDefault();
      navigate(`/edit/${props.mem_id}`);
   }
   const addcart=async (e)=>{
    e.preventDefault();
    let id=props.id;
    let res=await axios.post(`http://localhost:8081/addcart/${props.mem_id}`,{id});
    console.log(res);
   }
  return (

     
    <div  >
        
        <div className="card mt-3 mx-3" style={{width:"300px",height:"300px", fontFamily:"cursive"}} >
        <img style={{width:"100%",height:"100%"}}src={props.img} className="card-img-top" alt="..."/>
        </div>
        <div  style={{width:"300px",paddingLeft:"18px"}}className="card-body">
        <h3 style={{paddingBottom:"10px"}}className="card-title">{props.memo}</h3>
       
     
        <button className="btn btn-primary ml-3 mr-3">View</button>
         <button className="btn btn-primary mx-3" onClick={delet}>Delete</button>
       
         <button className="btn btn-primary " onClick={edit}>Edit</button>
       
        </div>
       
    </div>
   
  )
}

export default Item