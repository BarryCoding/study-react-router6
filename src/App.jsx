import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import ProductDtail from './pages/ProductDtail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          {/* without shared layout between Products and ProductDetial */}
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDtail />} />

          {/*  */}
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
