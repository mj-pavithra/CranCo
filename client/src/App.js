import './App.css';

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HelloWorld />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;