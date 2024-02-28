import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Navbar, Container, Nav, Toast } from 'react-bootstrap';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const CreateEmployee = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [saccess, setsaccess] = useState('');
  const [awards, setAwards] = useState('');
  const [additional, setAdditional] = useState(false);
  const [award1, setAward1] = useState('');
  const [award2, setAward2] = useState('');
  const [award3, setAward3] = useState('');
  const [addS, setAddS] = useState(false);
  const [email,setEmail]=useState('')
  const [serverlevel, setServerlevel] = useState('');
  const [password,setPassword]=useState('')
  const [certifications,setCertifications]=useState('')
  const[education,setEducation]=useState('')
  const[addC,setAddC]=useState(false)
  const [cert1,setCert1]=useState('')
  const [cert2,setCert2]=useState('')
  const [cert3,setCert3]=useState('')
  const [url1,setUrl1]=useState('')
  const [url2,setUrl2]=useState('')
  const [url3,setUrl3]=useState('')

  const navigate = useNavigate();

  function hascert(e){
    setCertifications(e.target.value)
    if(e.target.value==="yes"){
      setAddC(true)
    }
    else{
      setAddC(false)
    }
  }

  function hasAwards(e) {
    setAwards(e.target.value);
    if (e.target.value === "yes") {
      setAdditional(true);
    } else {
      setAdditional(false);
    }
  }

  function hasserverA(e) {
    setsaccess(e.target.value)
    if (e.target.value === "yes") {
      setAddS(true)
    } else {
      setAddS(false)
    }
  }

  function isFutureDate(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    return inputDate > currentDate+18;
  }

  function handleSubmit(event) {
    const birthDate = new Date(dob);
    const today = new Date();
    if (isFutureDate(dob)) {
      alert('No future date or Date before 18 years is allowed for Date of Birth field');
      window.location.reload();
    } else {
      event.preventDefault();
      axios.post('https://ems-backend-7mfj.onrender.com/insert',{firstname, lastname, department, designation, salary, city,state,pincode,country,street,
      dob, age, gender, saccess, serverlevel, awards, award1, award2, award3, email, password, 
      certifications, cert1, cert2, cert3, url1, url2, url3, education})
    .then(res=>{
      toast.success("Employee Added Successfully")
      setTimeout(navigate('/dashboard'),5);
    })
    .catch(err=>console.log(err))
    }
  }

  useEffect(() => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const ageDiff = today.getFullYear() - birthDate.getFullYear();
      const isBirthdayPassed = today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
      const calculatedAge = isBirthdayPassed ? ageDiff : ageDiff - 1;
      setAge(calculatedAge);
    }
  }, [dob]);

  return (
    <div style={{ minHeight: '100vh', marginBottom:'20px'}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/create">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link as={Link} to="/">
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
        <div className="w-75 bg-white rounded p-4 mx-auto" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' ,border:'2px solid'}}>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">ADD AN EMPLOYEE HERE</h3>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" required placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" required placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Control type="date" required placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password*</Form.Label>
              <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Education*</Form.Label>
              <Form.Control as="select" required onChange={(e) => setEducation(e.target.value)}>
                <option value="">Select Highest Level of Education</option>
                <option value="Senior Position">High School</option>
                <option value="Junior Position">Under Graduation</option>
                <option value="Entry Level Position">Post Graduation</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Awards within the Company*</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="awards"
                  value="yes"
                  onChange={hasAwards}
                  checked={awards === 'yes'}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="awards"
                  value="no"
                  onChange={hasAwards}
                  checked={awards === 'no'}
                  required
                />
              </div>
            </Form.Group>
            {additional && 
            <>
            <Form.Group className="mb-3">
            <Form.Label>Award 1 Details*</Form.Label>
            <Form.Control type="text" required  placeholder="Award 1 Name" onChange={(e) => setAward1(e.target.value)} />
          </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Award 2 Details</Form.Label>
            <Form.Control type="text" placeholder="Award 2 Name" onChange={(e) => setAward2(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Award 3 Details</Form.Label>
          <Form.Control type="text" placeholder="Award 3 Name" onChange={(e) => setAward3(e.target.value)} />
        </Form.Group>
            </>
            }
            <Form.Group className="mb-3">
              <Form.Label>Age* - [will be filled automatically through DOB]</Form.Label>
              <Form.Control type="number" required min="21" placeholder="Age" value={age} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Designation*</Form.Label>
              <Form.Control as="select" required onChange={(e) => setDesignation(e.target.value)}>
                <option value="">Select Designation</option>
                <option value="Senior Position">Senior Position</option>
                <option value="Junior Position">Junior Position</option>
                <option value="Entry Level Position">Entry Level Position</option>
                <option value="Intern">Intern</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department*</Form.Label>
              <Form.Control as="select" required onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="HR">R&D</option>
                <option value="PR">Public Relations</option>
                <option value="Board Member">Board Member</option>
                <option value="Front end Developer">Front end Developer</option>
                <option value="Backend end Developer">Back end Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="ML ops">ML Ops Officer</option>
                <option value="Helper & Others">Helper & Others</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Salary*</Form.Label>
              <Form.Control type="number" required min="10000" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Street Name*</Form.Label>
              <Form.Control type="text" required placeholder="Street Name" onChange={(e) => setStreet(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City*</Form.Label>
              <Form.Control type="text" required placeholder="City" onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State*</Form.Label>
              <Form.Control type="text" required placeholder="State" onChange={(e) => setState(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country*</Form.Label>
              <Form.Control type="text" required placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pincode*</Form.Label>
              <Form.Control type="number" min="1" required placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender*</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === 'Male'}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === 'Female'}
                  required
                />
              </div>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Server Access*</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="saccess"
                  value="yes"
                  onChange={hasserverA}
                  checked={saccess === 'yes'}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="saccess"
                  value="no"
                  onChange={hasserverA}
                  checked={saccess === 'no'}
                  required
                />
              </div>
              {addS &&
                <Form.Group className="mb-3">
                <Form.Label>Level of server Access*</Form.Label>
                <Form.Control as="select" required onChange={(e) => setServerlevel(e.target.value)}>
                  <option value="">Select level</option>
                  <option value="Admin level">Admin level-All</option>
                  <option value="Read only">Read only</option>
                  <option value="Read & write">Read & Write</option>
                  <option value="Main DB only"> Main DB Access Only</option>
                  <option value="Hosting Only">Hosting Only</option>
                  <option value="SSM Level">Server setting Modification Level</option>
                </Form.Control>
              </Form.Group>
              }
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Certifications*</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="certifications"
                  value="yes"
                  onChange={hascert}
                  checked={certifications === 'yes'}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="certifications"
                  value="no"
                  onChange={hascert}
                  checked={certifications === 'no'}
                  required
                />
              </div>
              {addC && 
            <>
            <Form.Group className="mb-3">
            <Form.Label>Certification 1 Details*</Form.Label>
            <Form.Control type="text" required  placeholder="Certificate 1" onChange={(e) => setCert1(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Certification 1 URL* - [URL of the Certificate should be provided here]</Form.Label>
            <Form.Control type="url" required  placeholder="Certificate 1 url" onChange={(e) => setUrl1(e.target.value)} />
          </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Certificate 2 Details</Form.Label>
            <Form.Control type="text" placeholder="Certificate 2" onChange={(e) => setCert2(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Certification 2 URL - [URL of the Certificate should be provided here]</Form.Label>
            <Form.Control type="url" required  placeholder="Certificate 2 url" onChange={(e) => setUrl2(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Certificate 3 Details</Form.Label>
          <Form.Control type="text" placeholder="Certificate 3" onChange={(e) => setCert3(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Certification 3 URL - [URL of the Certificate should be provided here]</Form.Label>
            <Form.Control type="url" required  placeholder="Certificate 3 url" onChange={(e) => setUrl3(e.target.value)} />
          </Form.Group>
            </>
            }
            </Form.Group>
            <div className="d-grid">
              <Button variant="success" type="submit" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#000' }}>
                CREATE EMPLOYEE RECORD
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateEmployee;
