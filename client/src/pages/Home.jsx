import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  let counter = 0;
  const navigate = useNavigate();


  const handleLogOut = () =>{
    localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get("http://localhost:8080/api/v1/user/fetchUsersData");
        if (userData.data.success) {
          console.log(userData.data);
          setUsers(userData.data.data);
        } else {
          console.log(userData.data.message);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Serial no.</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
               <th scope="row">{++counter}</th>
              <td>{user.name}</td>
              <td>{new Date(user.dob).toLocaleDateString()}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" class="btn btn-dark" style={{marginLeft: "45%"}} onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Home;