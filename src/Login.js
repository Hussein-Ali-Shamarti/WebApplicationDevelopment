import React, { useState } from 'react';
import { auth } from '../services/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in user:', userCredential.user);
            // Redirect to profile page or home page after login
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle errors here, such as displaying a notification
        }
    };

    return (
        <form onSubmit={loginUser}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
