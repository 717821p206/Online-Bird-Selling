import React from "react";
import './AllBirds.css';
import { Link } from "react-router-dom";
function Addcard(){
    return(
 <div  className="AddBirds">
    <form >
        <h1 className="pb-4 text-success">Adding Cards</h1>
       <h5 className="pb-3"> Name:<input type="text" className='name text-center' placeholder="Enter the bird name"></input> <br></br></h5>
       <h5 className="pb-3">Bird video:<input type="file" claaName=" p-15" ></input><br></br></h5> 
        <Link to='/AddDetails'><button  className="allDetail" variant="primary">Click me!!</button></Link>
    </form>
    </div>
    );

}
export default Addcard; 