import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Header from './components/common/Header/Header.js';
import Home from './components/Home/Home';
import './App.scss';
import Sidebar from './components/common/Burger/Sidebar';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Sidebar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
