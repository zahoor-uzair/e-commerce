import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './container/home';
import { Navigation } from './components/nav';
import Dashboard from './container/dashboard';
import AboutPage from './container/about';
import Footer from './components/footer';
import Protected from './auth/protected';
import { useContext } from 'react';
import { AuthContext } from './auth/authprovider';
import ProductDetail from './container/productdetail';
import { CartProvider } from './context/cartcontext';
function App() {
  const authContext = useContext(AuthContext);
  const { isLoggedIn } = authContext;
  return (
    <div>
      <CartProvider >
        <Navigation />
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/about' Component={AboutPage} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path='/dashboard'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
