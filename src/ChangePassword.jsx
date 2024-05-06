import React, { useState } from 'react';
import axios from 'axios';

function ChangePassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Assuming you have the API setup to handle password change and user is authenticated
            const response = await axios.post('http://localhost:5000/api/auth/change-password', {
                newPassword: newPassword
            }, {
                headers: {
                    // Assuming a token is needed for authorization
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            setSuccess(true);
            setError('');
            console.log('Password changed successfully:', response.data);
        } catch (error) {
            setError('Failed to change password. Please try again.');
            console.error('Error changing password:', error);
        }
    };

    return (
        <div className="change-password-container">
            <h1>Change Password</h1>
            <form onSubmit={handleUpdatePassword}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Update</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Password has been updated successfully!</p>}
        </div>
    );
}

export default ChangePassword;
