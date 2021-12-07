// import { useAuth0 } from '@auth0/auth0-react';

import logoutIcon from '../../../assets/icons/logout.svg';

const LogoutButton = () => {
  //   const { logout } = useAuth0();

  return (
    <button className="header__user-btn">
      <img src={logoutIcon} alt="login" className="header__user-img" />
    </button>
  );
};

export default LogoutButton;

// onClick={() => logout({ returnTo: window.location.origin })}
