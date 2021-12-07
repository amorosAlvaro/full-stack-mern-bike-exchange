import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login/login';
import Header from './components/common/Header/Header.js';
import Home from './components/Home/Home';
import './App.scss';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />{' '}
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
