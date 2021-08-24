import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/history">My workouts</NavLink></li>
                <li><NavLink to="/forms">Add a new Workout</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;