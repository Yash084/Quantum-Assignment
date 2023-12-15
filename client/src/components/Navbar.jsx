import { MDBCardLink } from 'mdb-react-ui-kit';
import React from 'react';

const Navbar = ({ handleLogOut }) => {
    return (
        <>
            <nav class="navbar navbar-dark bg-primary justify-content-between">
                <MDBCardLink class="navbar-brand" ><span style={{ fontSize: "1.8rem"}}>Navbar</span></MDBCardLink>
                <button type="button" class="btn btn-outline-dark" onClick={handleLogOut}>Logout</button>
            </nav>
        </>
    );
}

export default Navbar;
