// ProfilePage.jsx
import React, { useState } from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function ProfilePage() {
    const [username, setUsername] = useState('Current Username');
    const [password, setPassword] = useState('');
    const [reason, setReason] = useState('');

    const handleUpdateAccount = () => {
        alert("Account updated!");
        // Add logic for updating the account information
    };

    return (
        <div className="profile-page">
            <div className="content">
                <h2>Profile</h2>

                {/* Edit Username and Password Fields */}
                <div className="form-fields">
                    <div className="form-item">
                        <label>Edit Username</label>
                        <input
                            type="text"
                            className="input-box"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label>Edit Password</label>
                        <input
                            type="password"
                            className="input-box"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Delete Account Dropdown */}
                    <div className="form-item">
                        <label>Delete Account</label>
                        <select
                            className="dropdown"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        >
                            <option value="">Pick reasons</option>
                            <option value="Made another account.">- Made another account.</option>
                            <option value="Want a break.">- Want a break.</option>
                        </select>
                    </div>

                    {/* Reset Account Links */}
                    <div className="form-item">
                        <label>Reset Account</label>
                        <Link to="/reset-email" className="reset-account-link">Reset Account using via email</Link>
                    </div>
                </div>

                {/* Update Account Button */}
                <button className="update-button" onClick={handleUpdateAccount}>Update Account</button>
            </div>
        </div>
    );
}

export default ProfilePage;
