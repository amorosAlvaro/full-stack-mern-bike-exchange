import { Link } from 'react-router-dom';
import loginIcon from '../../../assets/icons/login.svg';

const LoginButton = function LoginButton() {
  return (
    <Link to="/login">
      <button className="header__user-btn" type="button">
        <img src={loginIcon} alt="login" className="header__user-img" />
      </button>
    </Link>
  );
};

export default LoginButton;

// onClick={() => loginWithRedirect()}
