import React, { useState, useContext } from 'react'
import './Modal.css'
import { AuthContext } from '../auth/authprovider';

const Modal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    const { login } = authContext;
    const handleLogin = () => {
        // Check if email and password match the expected values
        if (email === 'abc@gmail.com' && password === 'password') {
            login();
            closeModal();
        } else {
            // Display an error message or handle invalid credentials
            alert('Invalid email or password');
        }
    };


    return (
        <>  <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='modal-btn' type="submit">Login</button>
                </form>
            </div>
        </div></>
    )
}

export default Modal