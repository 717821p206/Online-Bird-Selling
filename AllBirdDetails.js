 import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap";
import "./AllBirds.css"
import yellowFischer from '../vedios/yellowFischer.mp4';
import SulpherBird from '../vedios/SulpherBird.mp4';
 import BlueAndGoldMacaw from '../vedios/BlueAndGoldMacaw.mp4';
import Pigeon from '../vedios/Pigeon.mp4';
import FinchBird from '../vedios/FinchBird.mp4';
import {Routes, Route,Link} from 'react-router-dom';
import FirstBird from './FirstBirdDetails';
import SecondBird from './SecondBirdDetails';
 import ThirdBird from './ThirdBirdDetails';
import FourthBird from './FourthBirdDetails';
import FifthBird from './FifthBirdDetails';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';

// function AllDetails()
// {
//    return(
//     //  <div   className="  container-fluid text-bg-secondary border border-light p-6" id="birdDetail">
//     //     <div className=' row border border-light  ' id="bird1">
//     //      <div className="col self-align-center"   ><video src={yellowFischer} width={500}  autoPlay loop muted/> </div> 
//     //     <div  className='col  text-align-center ' > <a href="/FirstBirdDetails" >Yellow Fischer Love Bird</a></div>
//     //     <Routes>
        
//     //      <Route path='/FirstBirdDetails' element={< FirstBird/>} />
        
//     //      </Routes>
//     //     </div>
//     //     <div className=' row border border-light  ' id="bird2">
//     //      <div className="col"    ><video src={SulpherBird} width={500} autoPlay loop muted/> </div> 
//     //      <div  className='col text-align-center ' > <a href="/SecondBirdDetails" >Sulpher - Crested Cockatatoo</a></div>
//     //      <Routes>
        
//     //      <Route path='/SecondBirdDetails' element={< SecondBird/>} />
         
//     //      </Routes>
//     //     </div>
//     //     <div className='row border border-light' id="bird3">
//     //      <div className="col "    ><video src={BlueAndGoldMacaw} width={500} autoPlay loop muted/></div> 
//     //      <div  className='col  text-align-center ' > <a href="/ThirdBirdDetails">Blue and Gold Macaw</a></div>
//     //      <Routes>
         
//     //      <Route path='/ThirdBirdDetails' element={< ThirdBird/>} />
       
//     //      </Routes>
//     //     </div>
//     //     <div className='row border border-light ' id="bird4">
//     //      <div className="col"    ><video src={FinchBird} width={500} autoPlay loop muted/></div> 
//     //      <div  className='col text-align-center ' > <a href="/FourthBirdDetails" >Zebra Finch Bird</a></div>
//     //      <Routes>
        
//     //      <Route path='/FourthBirdDetails' element={< FourthBird/>} />
         
//     //      </Routes>
//     //     </div>
//     //     <div className='row border border-light  ' id="bird5">
//     //      <div className="col"    ><video src={Pigeon} width={500} autoPlay loop muted/></div> 
//     //      <div  className='col  text-align-center ' > <a href="/FifthBirdDetails" >Pigeon</a></div>
//     //      <Routes>
       
//     //      <Route path='/FifthBirdDetails' element={< FifthBird/>} />
        
//     //      </Routes>
//     //     </div>
//     //  </div>  
//     <div  id="bird">
//     <Card style={{ width: '18rem' }}>
//     <video variant="top" src={yellowFischer} autoPlay muted loop/>
//     <Card.Body>
//       <Card.Text className='text-center'>
//         yellow Fischer Bird
//       </Card.Text>
//       <Link to="/FirstBirdDetails"><Button  variant="primary">Go somewhere</Button></Link>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     <video variant="top" src={SulpherBird} autoPlay muted loop/>
//     <Card.Body>
//       <Card.Text className='text-center'>
//         yellow Fischer Bird
//       </Card.Text>
//       <Link to="/SecondBirdDetails"><Button  variant="primary">Go somewhere</Button></Link>
//     </Card.Body>
//   </Card>
//   </div>

//    );
// }
// export default AllDetails;




const CardList = () => {
  const cardData = [
    {
      id: "FirstBird",
     Name:"Fischer Love Bird",
     videoSrc:"https://cdn.pixabay.com/vimeo/333604625/parrot-23223.mp4?width=640&hash=ee68dd78342ad14601344b9de794ad4c3c793c43",
       path:"/FirstBirdDetails"
    },
    {
      id: "SecondBird",
      Name:"Sulpher - Crested Cockatatoo",
      videoSrc:"https://player.vimeo.com/external/561637688.sd.mp4?s=4dcb3efb9d5e62666af343f1efcedfb5fe849be1&profile_id=164&oauth2_token_id=57447761",
      path:"/SecondBirdDetails"
    },
    {
      id: "ThirdBird",
     Name:"Blue And Gold Macaw",
     videoSrc:"https://player.vimeo.com/external/639340579.sd.mp4?s=5629f05120018a25fdc0d1241ec75e927ffed21c&profile_id=164&oauth2_token_id=57447761",
     path:"/ThirdBirdDetails"
    },
    {
      id: "FourthBird",
      Name:"Zebra Finch Bird",
      videoSrc:"https://player.vimeo.com/external/200784922.sd.mp4?s=4b3a769727d083fbb1825b7601f49847ea95ffab&profile_id=164&oauth2_token_id=57447761",
      path:"/FourthBirdDetails"
    },
    {
      id: "FifthBird",
      Name:"Pigeon",
      videoSrc:"https://player.vimeo.com/progressive_redirect/playback/744773327/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=1c84e067a8164a5854e08a42bb3b0ceb548358d18bf2c3c326cebc47d5c4ae1a",
      path:"/FifthBirdDetails"
    },
    
    
  ];

  return (
    <div id="bird">
       <Row  >
      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
           <Card>
             <video claaName="pt-2"variant="top" src={card.videoSrc} type="video/mp4" autoPlay muted loop />
             <Card.Body>
               <Card.Text>
                 <h5 className='text-center'>{card.Name}</h5>
               </Card.Text>
               <Link to={card.path}><Button  class="allDetail" variant="primary">Click me!!</Button></Link>
             </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
    </div>
  );
};

export default CardList;
