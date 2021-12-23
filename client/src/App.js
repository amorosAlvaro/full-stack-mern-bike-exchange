import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/common/Header/Header';
import './App.scss';
import Sidebar from './components/common/Burger/Sidebar';
import SignUp from './components/SignUp/SignUp';
import AddBike from './components/AddBike/Addbike';
import AllBikesList from './components/AllBikesList/AllBikesList';
import OwnedBikesList from './components/OwnedBIkesList/OwnedBikesList';
import FavoriteBikesList from './components/FavoriteBikesList/FavoriteBIkesList';
import Details from './components/Details/Details';

const App = function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<AllBikesList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/addbike" element={<AddBike />} />
            <Route path="/bikes/owned" element={<OwnedBikesList />} />
            <Route path="/bikes/favorite" element={<FavoriteBikesList />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
