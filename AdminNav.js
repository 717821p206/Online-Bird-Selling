import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function AdminNav() {
  return (
    <div className='adminNavbar'>
    <Nav className='  bg-success p-5 fs-1' justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Link to="/AllBirdDetails">All Birds</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Addcard">Add Birds</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Report">Report</Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default AdminNav;