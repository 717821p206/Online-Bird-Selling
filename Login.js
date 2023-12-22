import React, { useState } from 'react';
import loginVedio from '../vedios/loginVedio.mp4';
import  './login.css';
import AllDetails from './AllBirdDetails';
import { Routes,Route,Link } from 'react-router-dom';
import SignUp from './SignUp';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
   };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

   
  };


  return (
  
    <div >
      <video src={loginVedio} className='loginVdo container-fluid'  autoPlay loop muted />
 
    <div className="form border rounded  ">
      <form onSubmit={handleFormSubmit} className="submit">
       <h3 className='text-center p-3'>Login</h3>
        <div > Email: <input  width={250}  type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required  /></div> <br></br>
          <div >password: <input  width={250} type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required /></div><br></br>
      <Link to="/AllBirdDetails" > <button  className='fs-6 bg-info border rounded-pill' type="submit">Login</button></Link><br></br>
      <p className='p-3'>Do you have not account? <Link to="/SignUp" >SignUp</Link></p>
      </form>
    </div>
    </div>   
  );
};
export default Login;
 