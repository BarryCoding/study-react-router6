# React-router6 学习文档

### Docs

[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)

### Install

```sh
npm install react-router-dom@6
```

## 1 First Page

- App.js

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<>home page</>} />
      <Route path='testing' element={<h2>testing</h2>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
```

## 2 Pages Compnents

- App.js & pages

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 3 Links

- pages
  - Home.jsx About.jsx
  - `<Link to='/path' >PageDescription</Link>`

## 4 Error Page

## 5 Nested Pages

- App.jsx updated

## 6 Shared Layout

- work with nested pages
- Home.jsx updated

## 7 Navbar

- add Navbar.jsx
- update Home.jsx

## 8 Index Route

> ### From Docs
> - Index routes render in the parent routes outlet at the parent route's path.
> - Index routes match when a parent route matches but none of the other children match.
> - Index routes are the default child route for a parent route.
> - Index routes render when the user hasn't clicked one of the items in a navigation list yet.

- refactor shared layout
  - add SharedLayout.jsx
  - update Home.jsx used only as content
  - update App.jsx

## 9 NavLink (className)

- Link when Active has a active style
- add StyledNavbar.jsx to replace Navbar.jsx
- NavLink className={fn} control the active link style

## 10 useParams

- read URL prarams
- update app.js 
- add ProductDetail.js