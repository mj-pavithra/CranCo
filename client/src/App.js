import "./App.css";

import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
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
