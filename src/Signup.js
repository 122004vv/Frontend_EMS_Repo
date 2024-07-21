import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

export const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [pwlogin, setPwlogin] = useState('');
  const[name,setName]=useState('')
  const[newpw,setnewpw]=useState('')
  const handleLogin = async (event) => {
    console.log("hello")
    navigate('/adminLogin')
  }
  
  return (
    <div style={{backgroundColor: '1e1e1e' , marginTop:'55px'}}>
    <div style={{ backgroundColor: '1e1e1e', color: '#fff',overflow:'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <h3 className="mt-5" style={{color:'black', marginBottom:'20px'}}>SIGN UP PAGE</h3>
      <div className="w-50 bg-dark rounded p-3">
        <form onSubmit={handleLogin}>
        <div className="mb-2">
            <label htmlFor="name" style={{ color: '#fff' }}>
              <strong>Name*</strong>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your username"
              className="form-control rounded-0"
              style={{ backgroundColor: 'white', color: '#000' }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="username" style={{ color: '#fff' }}>
              <strong>Employee Mail*</strong>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your mail@xyzcompany.com"
              className="form-control rounded-0"
              style={{ backgroundColor: 'white', color: '#000' }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" style={{ color: '#fff' }}>
              <strong>Password*</strong>
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your Password"
              className="form-control rounded-0"
              style={{ backgroundColor: 'white', color: '#000' }}
              onChange={(e) => setPwlogin(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" style={{ color: '#fff' }}>
              <strong>Re-enter new Password*</strong>
            </label>
            <input
              name="newpw"
              type="password"
              required
              placeholder="Enter your Password"
              className="form-control rounded-0"
              style={{ backgroundColor: 'white', color: '#000' }}
              onChange={(e) => setnewpw(e.target.value)}
            />
          </div>
          <div >
          <input required type="checkbox" name="termsandconditions" style={{ backgroundColor: '#2e2e2e', color: '#fff' ,margin:"5px"}} />
          <label htmlFor="termsandconditions" style={{ color: '#fff' }}>
               You are agreeing to our terms & conditions
          </label>
          </div>
          <div className="bg-dark rounded  mb-3" style={{ marginBottom: '15px' }}>
          <button type="submit"  className="btn btn-success mb-3 w-100 rounded-0" style={{ backgroundColor: 'white', color: '#000' }}>
           SIGN IN & VERIFY
          </button>
          </div>
          
        </form>
        <label htmlFor="termsandconditions" style={{ color: '#fff' }}>
               Already have an Employee account?
          </label>
          <Link to="/login">
          <button className="btn btn-success mb- w-100 rounded-0"  >
          LOG IN
          </button
          ></Link>
        
      </div>
    </div>
    {/* <div className="bg-dark rounded  mb-3" style={{ marginBottom: '15px' }}>
    </div> */}
    
    </div>
  );
};

export default Signup;
