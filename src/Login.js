import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add')
        }
    },[])
    const navigate = useNavigate();
    const login=async ()=>{
        let item={email,password};
        let result= await fetch("http://localhost:3000/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem('user-info',JSON.stringify(result));
        navigate('/add');
    }
    
    return(
        <>
        <Header />
            <h1>Login Page</h1>
           <div className="col-sm-6 offset-sm-3"> 
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/><br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Password"/><br/>
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
        </>
    )
}
export default Login;