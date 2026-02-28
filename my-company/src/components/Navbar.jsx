import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

   const linkContainer = {
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
     <div  style={{ color: 'white', fontWeight: 'bold' }}>
        MyCompany   
     </div>   

     <div style={linkContainer}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
     </div>
    </nav>
  );
}

export default Navbar;