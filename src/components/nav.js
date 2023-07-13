import { Link } from 'react-router-dom';
import './nav.css'
export const Navigation = ({ isLoggedIn, logIn, logOut }) => {
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
                <button className='log' onClick={logOut}>Logout</button>
            ) : (
                <button className='log' onClick={logIn}>Login</button>
            )}
        </nav>
    );
};
