import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SharedProductLayout from './pages/SharedProductLayout';
import Products from './pages/Products';
import ProductDtail from './pages/ProductDtail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          
          <Route path='products' element={<SharedProductLayout />} >

          <Route index element={<Products />} />
          <Route path=':productId' element={<ProductDtail />} />
          </Route>

          {/*  */}
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
