import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import './Header.scss';

const Header = function Header() {
  const token = useSelector((store) => store.login);

  return (
    <>
      <header className="header">
        <h1 className="header__title">Bike exchange</h1>
        <div className="header__hamburger-login">
          {token ? <LogoutButton /> : <LoginButton />}
        </div>
      </header>
      <div className="header__spacer" />
    </>
  );
};

export default Header;
