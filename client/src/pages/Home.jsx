// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Navbar from '../components/Navbar';
// // import '../styles/home.css';

// // const Home = () => {
// //   const [users, setUsers] = useState([]);
// //   const [error, setError] = useState('');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [usersPerPage] = useState(5); 
// //   const navigate = useNavigate();

// //   const handleLogOut = () => {
// //     localStorage.clear();
// //     navigate('/login');
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const userData = await axios.get('https://quantumserver.vercel.app/api/v1/user/fetchUsersData');
// //         if (userData.data.success) {
// //           setUsers(userData.data.data);
// //         } else {
// //           console.log(userData.data.message);
// //         }
// //       } catch (error) {
// //         setError(error);
// //         console.log(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Get current users
// //   const indexOfLastUser = currentPage * usersPerPage;
// //   const indexOfFirstUser = indexOfLastUser - usersPerPage;
// //   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

// //   // Change page
// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   return (
// //     <div className="happ">
// //       <Navbar handleLogOut={handleLogOut} />

// //       <div className="container">
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th scope="col">Serial no.</th>
// //               <th scope="col">Name</th>
// //               <th scope="col">Date of Birth</th>
// //               <th scope="col">Email</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {currentUsers.map((user, index) => (
// //               <tr key={user._id}>
// //                 <th scope="row">{index + 1 + indexOfFirstUser}</th>
// //                 <td>{user.name}</td>
// //                 <td>{new Date(user.dob).toLocaleDateString()}</td>
// //                 <td>{user.email}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         <nav aria-label="Pagination">
// //           <ul className="pagination">
// //             {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
// //               <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
// //                 <button className="page-link" onClick={() => paginate(index + 1)}>
// //                   {index + 1}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>

// //       <button
// //         type="button"
// //         className="btn btn-dark"
// //         style={{ marginLeft: '45%' }}
// //         onClick={handleLogOut}
// //       >
// //         Logout
// //       </button>
// //     </div>
// //   );
// // };

// // export default Home;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import '../styles/home.css';

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(5); // Number of users per page
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await axios.get('https://quantumserver.vercel.app/api/v1/user/fetchUsersData');
//         if (userData.data.success) {
//           setUsers(userData.data.data);
//         } else {
//           console.log(userData.data.message);
//         }
//       } catch (error) {
//         setError(error);
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Get current users
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Previous page
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Next page
//   const handleNextPage = () => {
//     if (currentPage < Math.ceil(users.length / usersPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div className="happ">
//       <Navbar handleLogOut={handleLogOut} />

//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Serial no.</th>
//               <th scope="col">Name</th>
//               <th scope="col">Date of Birth</th>
//               <th scope="col">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.map((user, index) => (
//               <tr key={user._id}>
//                 <th scope="row">{index + 1 + indexOfFirstUser}</th>
//                 <td>{user.name}</td>
//                 <td>{new Date(user.dob).toLocaleDateString()}</td>
//                 <td>{user.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <nav aria-label="Pagination">
//           <ul className="pagination">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={handlePreviousPage}>
//                 Previous
//               </button>
//             </li>
//             {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
//               <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                 <button className="page-link" onClick={() => paginate(index + 1)}>
//                   {index + 1}
//                 </button>
//               </li>
//             ))}
//             <li className={`page-item ${currentPage === Math.ceil(users.length / usersPerPage) ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={handleNextPage}>
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <button
//         type="button"
//         className="btn btn-dark"
//         style={{ marginLeft: '45%' }}
//         onClick={handleLogOut}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users per page
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get('https://quantumserver.vercel.app/api/v1/user/fetchUsersData');
        if (userData.data.success) {
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

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Render page numbers
  const renderPageNumbers = () => {
    const totalPages = Math.ceil(users.length / usersPerPage);
    const pageNumbers = [];

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => paginate(i)}>
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="happ">
      <Navbar handleLogOut={handleLogOut} />

      <h1 style={{marginLeft: "25%"}}>List of all users and their details</h1>

      <div className="container">
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
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1 + indexOfFirstUser}</th>
                <td>{user.name}</td>
                <td>{new Date(user.dob).toLocaleDateString()}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Pagination">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={handlePreviousPage}>
                Previous
              </button>
            </li>
            {renderPageNumbers()}
            <li className={`page-item ${currentPage === Math.ceil(users.length / usersPerPage) ? 'disabled' : ''}`}>
              <button className="page-link" onClick={handleNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <button
        type="button"
        className="btn btn-dark"
        style={{ marginLeft: '45%', marginBottom: "1rem" }}
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
