import React from "react";

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
    
      <label for="email"  style={{
        marginRight: '10px'
        }}>Email: </label>
        <input type='email' id='email' name='email' />
        
      <label for="pwd" style={{
        marginLeft: '10px',
        marginRight: '10px'
        }}>Password: </label>
        <input type='password' id='pwd' name='pwd' />
        
      <button style={{
        marginLeft: '10px',
        }}>OK</button>
        
    </>
  );
}