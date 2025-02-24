import React from "react";
import './Navbar.css';
import { Link, Route, Router, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";




function Navbar() {

    const navigate = useNavigate();
    // const location = useLocation();
    // const {d} = location.state || {};
    // const {setD} = location.le || {};
    // console.log({d},"d value");

    // function change(){
    //     setD("From Navbar..")
    // }

    function logout(){
        localStorage.removeItem("authentication");
        navigate('/');
    }




    return (
        <>
            {/* ------ This is for get and change the value from the login page */}
            {/* <h1>Navbar is worked</h1>
            <button onClick={change}>Get value from Navbar</button>
            <h2>Name: {d}</h2>
            <h2>Age: {}</h2> */}


            <nav className="nav-container">
                <div>
                    <img src="logo.png" alt="Logo" className="nav-img" />
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/series" className="nav-link">Series</Link>
                    <Link to="/teams" className="nav-link">Teams</Link>
                    <Link to="/ranking" className="nav-link">Ranking</Link>
                </div>

                <div>
                    <input type="text" className="nav-search" placeholder="Search..." />
                    <img src="bell-icon.png" alt="Notifications" className="nav-img" />
                    <img src="user-icon.png" alt="User" className="nav-img" />
                    <button className="logoutbtn" onClick={logout}>LogOut</button>
                </div>
            </nav>






        </>

    );
}

export default Navbar;