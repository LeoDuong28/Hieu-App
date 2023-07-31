import React, { useState } from "react";
import logo from './assets/icon.png';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="user-form-container">
            <img
                className="app-icon"
                src={logo}
                alt="Logo"
            />
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    value={username} 
                    onChange={(e) => setEmail(e.target.value)}
                    type="username"
                    placeholder="Your Username"
                    id="username"
                    name="username" 
                />
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Your password???" 
                    id="password"
                    name="password"
                />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Aready have an account? Login Here!</button>
        </div>
    );
}

