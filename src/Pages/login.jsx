import React from "react";
import {useRef} from 'react';





export const Login =()=>{
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const loginUser = ()=>{
        console.log(usernameRef.current,passwordRef.current);
        console.log(usernameRef.current.value,passwordRef.current);
    }
    return(
        <form>
            <input type="text" placeholder="username" ref={usernameRef}/>
            <input type="password" placeholder="Password" ref={passwordRef}/>
            <button type='button' onClick={loginUser}>login</button>
        </form>
    )
}
export default Login;