
import Login from './pages/Login';
import Home from './pages/Home';
import AllDetails from './pages/AllBirdDetails';
import FirstBird from './pages/FirstBirdDetails';
import SecondBird from './pages/SecondBirdDetails';
import ThirdBird from './pages/ThirdBirdDetails';
import FourthBird from './pages/FourthBirdDetails';
import FifthBird from './pages/FifthBirdDetails';
import SignUp from './pages/SignUp';
import Order from './pages/Order';
import Customer from './pages/Customer';
import Success from './pages/Success';
import Addcard from './pages/Addcard';
import AddDetails from './pages/AddDetails';
import AdminNav from './pages/AdminNav';
import Report from './pages/Report';
import DisplayReport from './pages/DisplayReport';
import Contact from './pages/Contact';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
function App() {
  return (
   <div>
     <BrowserRouter>
     
      <Link to='/'></Link>
      <Routes>
      <Route path='/' element={< Home/>} />
        <Route path='/Login' element={< Login/>} />
        <Route path='/SignUp' element={< SignUp/>} />
        <Route path='/AllBirdDetails' element={< AllDetails/>} />
        <Route path='/FirstBirdDetails' element={< FirstBird/>} />
        <Route path='/SecondBirdDetails' element={< SecondBird/>} />
        <Route path='/ThirdBirdDetails' element={< ThirdBird/>} />
        <Route path='/FourthBirdDetails' element={< FourthBird/>} />
        <Route path='/FifthBirdDetails' element={< FifthBird/>} />
        <Route path='/Order' element={< Order/>} />
        <Route path='/Customer' element={< Customer/>} />
        <Route path='/Success' element={< Success/>} />
        <Route path='/Addcard' element={< Addcard/>} />
        <Route path='/AddDetails' element={< AddDetails/>} />
        <Route path='/AdminNav' element={< AdminNav/>} />
        <Route path='/Report' element={< Report/>} />
        <Route path='/DisplayReport' element={< DisplayReport/>} />
        <Route path='/Contact' element={< Contact/>} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}
export default App;
