// CustomNavbar.jsx
import React, { useState } from 'react';
import './CustomNavbar.css';

function CustomNavbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="custom-navbar">
            {/* Logo and All Blogs on the left */}
            <div className="left-section">
                <div className="logo">Logo</div>
                <a href="#all-blogs" className="all-blogs-link">All Blogs</a>
            </div>

            {/* Navigation links and Log Out on the right */}
            <div className="right-section">
                <div className="top-links">
                    <a href="#home">Home</a>
                    <a href="#surfers">Surfers</a>
                    <a href="#profile">Profile</a>
                    <button className="logout-button">Log Out</button>
                </div>
                <div className="bottom-links">
                    <button className="add-blog-button">Add Blogs</button>
                    <div className="dropdown-container">
                        <button className="dropdown-button" onClick={toggleDropdown}>Ratings ▾</button>
                        {dropdownVisible && (
                            <ul className="dropdown-list">
                                <li>Random</li>
                                <li>Popularity</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomNavbar;
