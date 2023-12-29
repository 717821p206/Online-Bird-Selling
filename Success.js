import React from "react";
import './Success.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Success(){
return(
    <div className="success">
        <div>
    <i class=" icon bi-check-circle-fill "  ></i>
    <h1 >Your order is Confirmed</h1>
    </div>
    <Link to='/DisplayReport'><Button className="reportbtn m-5 p-2 fs-2">Report</Button></Link>
    </div>
)
}
export default Success;