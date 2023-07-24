import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import HomePage from './pages/HomePage';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HelloWorld />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/feed' element={<Pages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;