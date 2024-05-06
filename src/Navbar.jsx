// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
             <a href="/admin">Admin Dashboard</a>
             <a href="/countsperdate">Count</a>
             <a href="/popular-post-page-per-date">Popular Post</a>
             <a href="/profile">Popular date</a>
             <a href="/popular-blog-post-per-date">Popular Blogger</a>
             <a href="/profile">Popular Blogger Per date</a>
             <button className="logout-button">Log Out</button>
            
        </nav>
    );
}

export default Navbar;
