import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup Info:', { username, email, password });
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png" alt="Signup" />
            </div>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2>Fill information below!</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
