import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Addmem() {
    let params=useParams();
    let image=useRef();
    let item=useRef();
   
    let navigate=useNavigate();
    const addmem= async (e)=>{
       e.preventDefault();
       let img=image.current.value;
       let text=item.current.value;
   
     
       let id=params.id;
       try {
        let res=await axios.post('http://localhost:8081/addmem',{img,text});
       console.log(res);
       } catch (error) {
        console.log("error in adding memory");
       }
       
    }
  return (
    <div>
             <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Add Your Memory</h1>
      <form onSubmit={addmem}>
          <div className="mb-3">
           <label htmlFor="img" className="form-label">Image</label>
           <input type="text" ref={image} className="form-control" name="img" placeholder="img"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="text" className="form-label">Text</label>
            <input type="text" ref={item} className="form-control" name="text" placeholder="Memory name"/>
           </div>
         
          
          <button className="btn btn-sm btn-success">Add Memory</button>
          
      </form>
      
  </div>

</div>
    </div>
  )
}


export default Addmem