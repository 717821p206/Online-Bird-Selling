import React from "react";
import { Link } from "react-router-dom";
import './login.css'
function Customer()
{
    return(
        <div className="form   ">
            
        <form  className="submit">
        <h2 className="text-center p-3">Hello!! Enter your Details</h2>
          <div > Name: <br></br><input  width={250}  type="name"  placeholder="Enter your name" required  /></div> <br></br>
            <div >Mobile Number: <br></br><input  width={250} type="number"  placeholder="Enter your number" required /></div><br></br>
            <div >Address:<br></br> <textarea  width={250} type="address"  placeholder="Enter your address" required /></div><br></br>
        <Link to="/Success" > <button  className='fs-6 bg-info border rounded-pill' type="submit">Submit</button></Link><br></br>
        </form>
      </div>
    )
}
export default Customer;