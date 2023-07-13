import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { AuthContext } from '../auth/authprovider';
import Modal from './modal';

export const Navigation = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, logout } = authContext;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);

    };

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/" className="navigation__link">
                        Home
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/about" className="navigation__link">
                        About
                    </Link>
                </li>
                {isLoggedIn && (
                    <li className="navigation__item">
                        <Link to="/dashboard" className="navigation__link">
                            Dashboard
                        </Link>
                    </li>
                )}
            </ul>
            {isLoggedIn ? (
                <button className="log" onClick={logout}>
                    Logout
                </button>
            ) : (
                <button className="log" onClick={openModal}>
                    Login
                </button>
            )}

            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </nav>
    );
};
