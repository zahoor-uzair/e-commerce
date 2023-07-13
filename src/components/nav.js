import { Link } from 'react-router-dom';
import './nav.css'
import { useContext } from 'react';
import { AuthContext } from '../auth/authprovider';
export const Navigation = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, login, logout } = authContext;

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/" className="navigation__link">Home</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/about" className="navigation__link">About</Link>
                </li>
                {
                    isLoggedIn ?
                        <li className="navigation__item">
                            <Link to="/dashboard" className="navigation__link">Dashboard</Link>
                        </li> :
                        null
                }

            </ul>
            {isLoggedIn ? (
                <button className='log' onClick={logout}>Logout</button>
            ) : (
                <button className='log' onClick={login}>Login</button>
            )}
        </nav>
    );
};
