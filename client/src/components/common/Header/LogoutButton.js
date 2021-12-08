import { useDispatch } from 'react-redux';
import logoutIcon from '../../../assets/icons/logout.svg';
import { logOutUser } from '../../../redux/action.creators';

const LogoutButton = function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <button type="button" className="header__user-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="login" className="header__user-img" />
    </button>
  );
};

export default LogoutButton;

// onClick={() => logout({ returnTo: window.location.origin })}
