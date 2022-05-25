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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>home page</>} />
        <Route
          path='testing'
          element={
            <>
              <h2>testing</h2>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```