import loginIcon from '../../../assets/icons/login.svg';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className="header__user-btn">
        <img src={loginIcon} alt="login" className="header__user-img" />
      </button>
    </Link>
  );
};

export default LoginButton;

// onClick={() => loginWithRedirect()}
