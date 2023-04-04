import Header from './Header';
import { useState } from 'react';
function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const addProduct=async()=>{
        console.log(name,file,price,description);
        const formData = new FormData();
        formData.append("file",file[0]);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);
        let result=await fetch("http://localhost:3000/addproduct",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(formData)
        });
        result=await result.json();
        console.log("result",result);
    }
    return(
        <>
          <Header/>
        <div className='col-sm-6 offset-sm-3'>
           <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='name'/><br/>
            <input type="file"  onChange={(e)=>setFile(e.target.files[0])} className='form-control' placeholder='file'/><br/>
            <input type="text"  onChange={(e)=>setPrice(e.target.value)} className='form-control' placeholder='price'/><br/>
            <input type="text"  onChange={(e)=>setDescription(e.target.value)} className='form-control' placeholder='description'/><br/>
            <button className='btn btn-primary' onClick={addProduct}>AddProduct</button>
        </div>
        </>
    )
}
export default AddProduct;