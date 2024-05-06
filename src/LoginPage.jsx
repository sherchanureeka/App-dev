import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <div className="logo-square"></div>
                <h1>App Name</h1>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div className="login-footer">
                <p>Don't have an account? <Link to="/signup">Signup Now</Link></p>
                <p><Link to="/forgot-password">Forgot password</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;
