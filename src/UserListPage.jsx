// UserListPage.jsx
import React from 'react';
import './UserListPage.css';

function UserListPage() {
    // Sample data to display in the table
    const userData = [
        { id: 1, username: "User1", email: "user1@example.com", role: "Admin" },
        { id: 2, username: "User2", email: "user2@example.com", role: "Editor" }
    ];

    // Handlers for updating and deleting user entries
    const handleUpdate = (id) => {
        alert(`Update user with ID: ${id}`);
        // Add logic for updating the specific user
    };

    const handleDelete = (id) => {
        alert(`Delete user with ID: ${id}`);
        // Add logic for deleting the specific user
    };

    return (
        <div className="user-list-page">
            <div className="content">
                <h2>User List</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="actions">
                                    <button className="update-button" onClick={() => handleUpdate(user.id)}>Update</button>
                                    <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserListPage;
