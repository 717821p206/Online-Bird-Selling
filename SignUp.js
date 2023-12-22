import React, { useState } from 'react';
import loginVedio from '../vedios/loginVedio.mp4';
import  './login.css';
import AllDetails from './AllBirdDetails';
import { Routes,Route,Link } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
   };
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
   };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

   
  };


  return (
   <div id="signUp">
    <div class="loginVdo">
      <video src={loginVedio} className='container-fluid' autoPlay loop muted />
   </div>
    <div className="form border rounded  ">
      <form onSubmit={handleFormSubmit} className="submit">
        <h3 className='text-center p-3'>SignUp</h3>
        <div > Name: <input  width={250}  type="email" value={name} onChange={handleNameChange} placeholder="Enter your name" required  /></div> <br></br>
        <div > Email: <input  width={250}  type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required  /></div> <br></br>
          <div >password: <input  width={250} type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required /></div><br></br>
          <div >Confirm password: <input  width={250} type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Enter your Confirm password" required /></div><br></br>
      <Link to="/AllBirdDetails" > <button  className='fs-6 bg-info border rounded-pill' type="submit">SignUp</button></Link><br></br>
      </form>
    </div>
    </div>   
  );
};
export default SignUp;
 