import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import {toast} from 'react-toastify'

export const LoginUser = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [pwlogin, setPwlogin] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/');
      const data = await response.json();
      const isValidUser = ()=>{
        if(username==="barath@gmail.com" && pwlogin==="123456"){
          return true;
        }
        else{
          return false;
        }
      }

      if (isValidUser) {
        await login(username, pwlogin);
        setTimeout(alert("Log in successful"),5);
        navigate('/create');
      } else {
        setUsername('');
        setPwlogin('');
        alert('Enter the proper employee login details.');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#fff', overflowX: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <h3 className="mt-5">LOGIN PAGE</h3>
      <div className="w-50 bg-dark rounded p-3">
        <form onSubmit={handleLogin}>
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
          <div>
          <input required type="checkbox" name="termsandconditions" style={{ backgroundColor: '#2e2e2e', color: '#fff' ,margin:"5px"}} />
          <label htmlFor="termsandconditions" style={{ color: '#fff' }}>
               You are agreeing to our terms & conditions
          </label>
          </div>
          <div className="bg-dark rounded  mb-3" style={{ marginBottom: '15px' }}>
          <button type="submit"  className="btn btn-success mb-3 w-100 rounded-0" style={{ backgroundColor: 'white', color: '#000' }}>
           LOGIN
          </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
