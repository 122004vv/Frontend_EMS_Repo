import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, Container, Nav, Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    certifications: '',
    serveraccess: '',
    awards: '',
    designation: '',
    department: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    // Fetch employee data from the server
    fetch('https://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data);
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const applyFilters = () => {
    const filtered = employeeData.filter((employee) => {
      for (const key in filters) {
        if (filters[key] && employee[key.toLowerCase()] !== filters[key.toLowerCase()]) {
          return false;
        }
      }
      return true;
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  const resetFilters = () => {
    setFilters({
      certifications: '',
      serveraccess: '',
      awards: '',
      designation: '',
      department: '',
    });
    setFilteredData(employeeData);
    setCurrentPage(1); // Reset to the first page when filters are reset
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '100vh' }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/create">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Filter Form */}
        <Form>
          {/* Certifications Filter Field */}
          <Form.Group controlId="formCertifications">
            <Form.Label>Certifications</Form.Label>
            <Form.Control
              as="select"
              value={filters.certifications}
              onChange={(e) => handleFilterChange('certifications', e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>

          {/* Server Access Filter Field */}
          <Form.Group controlId="formServerAccess">
            <Form.Label>Server Access</Form.Label>
            <Form.Control
              as="select"
              value={filters.serveraccess}
              onChange={(e) => handleFilterChange('serveraccess', e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>

          {/* Awards Filter Field */}
          <Form.Group controlId="formAwards">
            <Form.Label>Awards</Form.Label>
            <Form.Control
              as="select"
              value={filters.awards}
              onChange={(e) => handleFilterChange('awards', e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>

          {/* Designation Filter Field */}
          <Form.Group controlId="formDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              value={filters.designation}
              onChange={(e) => handleFilterChange('designation', e.target.value)}
            />
          </Form.Group>

          {/* Department Filter Field */}
          <Form.Group controlId="formDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Department"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
            />
          </Form.Group>

          {/* Filter and Reset buttons */}
          <Button className="mr-2" variant="primary" onClick={applyFilters}>
            Apply Filters
          </Button>
          <Button variant="secondary" onClick={resetFilters}>
            Reset Filters
          </Button>
        </Form>

        {/* Display Filtered Data */}
        <Table striped bordered hover className="mt-4" style={{ color: '#fff' }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstname}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{new Date(employee.dob).toLocaleDateString()}</td>
                <td>
                  <Link to={`/create`} style={{ color: 'black' }}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination>
          {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
}

export default Dashboard;
