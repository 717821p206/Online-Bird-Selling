import React from "react";
import { Card } from "react-bootstrap";
const CardDetails=({text,videoSrc})=>
   {   
    return(
   <Card style={{ width: '30rem' }}>
   <video variant="top" src={videoSrc}   autoPlay loop muted />
   <Card.Body>
     <Card.Text>{text}</Card.Text> 
    <Button variant="primary">Go somewhere</Button>
 </Card.Body>
 </Card>
   );
}
export default CardDetails;
