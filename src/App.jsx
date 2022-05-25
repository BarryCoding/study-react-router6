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
