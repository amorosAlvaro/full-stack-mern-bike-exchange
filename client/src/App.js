import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import './App.scss';
import Sidebar from './components/common/Burger/Sidebar';
import SignUp from './components/SignUp/SignUp';
import AddBike from './components/AddBike/AddBike';
import AllBikesList from './components/AllBikesList/AllBikesList';
import OwnedBikesList from './components/OwnedBIkesList/OwnedBikesList';

const App = function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/owned/addbike" element={<AddBike />} />
            <Route path="/bikes" element={<AllBikesList />} />
            <Route path="/bikes/owned" element={<OwnedBikesList />} />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
