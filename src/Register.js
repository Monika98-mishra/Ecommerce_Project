import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add')
        }
    },[])
    
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    

     async function signup(){
        let item={name,password,email};
        
       let result = await fetch("http://localhost:3000/resturant",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        
        });
        result=await result.json();
        console.log("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");
        
        
    }
    return(
        <>
          <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" className="form-control"/>
            <br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" className="form-control"/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" className="form-control"/>
            <br/>
            <button onClick={signup} className="btn btn-primary">SignUp</button>
        </div>
        </>
    )
}
export default Register;