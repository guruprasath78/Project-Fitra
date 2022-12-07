import React, {useState } from 'react'

function FormEx() {
    const [un,setUn]=useState("");
    const [pass,setPass]=useState("");
    const formHandler=(event)=>
    {
        event.preventDefault();
        const loginObj={
            name:un,
            pwd:pass
        }
        console.log(loginObj)
        alert(JSON.stringify(loginObj));
    }
  return (
    <>
<h3>Login</h3>
<form onSubmit={formHandler}>
    Username:<input type="text" value={un} placeholder='Username' onChange={(e)=>setUn(e.target.value)}></input><br/>
    Password:<input type="password" value={pass} placeholder='password' onChange={(f)=>setPass(f.target.value)}></input><br/>
    <button type='submit'>Login</button>
</form>
    </>
  )
}
 export default FormEx;