import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/exercisehistory">Exercise History</NavLink></li>
                {/* <li><NavLink to="/workout_history">Workout history</NavLink></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;