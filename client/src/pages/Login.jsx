import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleLogin = async () => {

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
  
    try {
      const res = await axios.post('https://quantumserver.vercel.app/api/v1/user/login', { email, password });
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong');
    }
  };

  return (
    < >
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-50'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Login</h2>
                 
                <p className="my-4" />

                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />


                <MDBBtn size='lg' onClick={handleLogin}>
                  Login
                </MDBBtn>

                {error && <p className="text-danger mt-3">{error}</p>}

                <p className="my-4" />

                <p>Do not have an account? <Link to="/register">Register</Link></p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;

