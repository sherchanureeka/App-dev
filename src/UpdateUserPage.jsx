// UpdateUserPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateUserPage.css'; // Ensure this file exists

function UpdateUserPage() {
    const navigate = useNavigate();

    // State for the user's details
    const [username, setUsername] = useState('Current Username');
    const [email, setEmail] = useState('currentuser@example.com');

    // Placeholder function to handle updating a user
    const handleUpdateUser = () => {
        alert("User details updated!");
        // Add logic for updating the user details
    };

    return (
        <div className="update-user-page">
            <div className="content">
                <h2>Update User</h2>

                <div className="form-fields">
                    <div className="form-item">
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Input your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type="email"
                            className="input-box"
                            placeholder="Input your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Update and Go Back Buttons */}
                <div className="action-buttons">
                    <button className="update-button" onClick={handleUpdateUser}>Update</button>
                    <button className="go-back-button" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateUserPage;
