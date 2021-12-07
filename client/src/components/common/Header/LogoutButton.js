import logoutIcon from '../../../assets/icons/logout.svg';
import { logOutUser } from '../../../redux/action.creators';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <button className="header__user-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="login" className="header__user-img" />
    </button>
  );
};

export default LogoutButton;

// onClick={() => logout({ returnTo: window.location.origin })}
