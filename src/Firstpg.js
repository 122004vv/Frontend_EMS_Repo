import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav,Container } from 'react-bootstrap';

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to top, black, #95A5A6);
  color: #fff;
`;

// const Logo = styled.h1`
//   font-size: 2rem;
//   margin-right: 20px;
// `;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px; /* Added margin to create spaces between buttons */
  text-align: center;
  text-decoration: none;
  font-weight:500;
  color: black;
  background-color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: grey;
  }
`;

const Firstpg = () => {
  return (
    <div style={{overflow:"hidden",maxHeight:"100vh"}}>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Contain>
      <Button to="/adminLogin">Admin Login</Button>
      <Button to="/employeeLogin">Employee Login</Button>
    </Contain>
    </div>
  );
};

export default Firstpg;
