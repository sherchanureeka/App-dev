// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <button>Admin Dashboard</button>
            <button>Count</button>
            <button>Popular Post</button>
            <button>Popular date</button>
            <button>Popular Blogger</button>
            <button>Popular Blogger Per date</button>
            <button>Log out</button>
            
        </nav>
    );
}

export default Navbar;
