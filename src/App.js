import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './container/home';
import { Navigation } from './components/nav';
import Dashboard from './container/dashboard';
import AboutPage from './container/about';
import Footer from './components/footer';
import Protected from './auth/protected';
import { useState } from 'react';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} logIn={logIn} logOut={logOut} />
      <Routes >
        <Route path='/' Component={Home} />
        <Route path='/about' Component={AboutPage} />
        {/* <Route path='/dashboard' Component={Dashboard} /> */}
        <Route path='/dashboard'
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />

      </Routes>
      <Footer />



    </div>
  );
}

export default App;
