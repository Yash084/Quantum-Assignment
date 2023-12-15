import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async () => {

    console.log(formData);

    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', formData);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }else{
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };


  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Register</h2>
              <p className="text-white-50 mb-3">Please enter your details to create an account!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Name' id='name' type='text' size="lg" onChange={handleChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Date of Birth' id='dob' type='date' size="lg" onChange={handleChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email' type='email' size="lg" onChange={handleChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' type='password' size="lg" onChange={handleChange} />

              <MDBBtn size='lg' onClick={handleRegister}>
                Register
              </MDBBtn>

              <hr className="my-4" />

              <p>Already have an account? <Link to="/login">Login</Link></p>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
