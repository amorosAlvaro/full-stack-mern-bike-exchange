import loginIcon from '../../../assets/icons/login.svg';

const LoginButton = () => {
  //   const token = useSelector((store) => store.login);

  return (
    <button className="header__user-btn">
      <img src={loginIcon} alt="login" className="header__user-img" />
    </button>
  );
};

export default LoginButton;

// onClick={() => loginWithRedirect()}
