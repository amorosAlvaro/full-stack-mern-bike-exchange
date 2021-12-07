import { Switch, Route } from 'react-router-dom';

import Details from './components/details/details';
import List from './components/list/list';
import Login from './components/login/login';
import Header from './components/common/Header/Header.js';
import './App.scss';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <switch>
        <div>
          <Login />
        </div>
      </switch>
    </>
  );
}

export default App;
