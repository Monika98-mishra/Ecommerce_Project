import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Login(props){

    let Cmp=props.Cmp;
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate('/register')
        }
    },[])
    const navigate = useNavigate();
    return(
        <div>
             <Cmp/>  
        </div>
    )
}
export default Login;