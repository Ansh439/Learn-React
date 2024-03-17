import React,{useState,useContext} from 'react';
import UserContext from "../context/UserContext";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit =(e) => {
    e.preventDefault();
    setUser({username,password});
  }
  return (
    <>
      <h2 className='text-2xl my-3'>Login</h2>
      <input className='p-4 w-3/4' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder='username'/>
      <br />
      <br />
      <input className='p-4 w-3/4' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='userpassword'/>
      <br />
      <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Login