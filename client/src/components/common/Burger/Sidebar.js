import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import star from '../../../assets/icons/start-white.svg';
import home from '../../../assets/icons/white-house.svg';
import user from '../../../assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);
  return (
    <Menu
      OuterContainerId={'main'}
      width={250}
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link to="/" onClick={handleClick}>
        <img src={home} alt="home icon" className="slide__icon" />
        Home
      </Link>
      <Link to="/favorites" onClick={handleClick}>
        <img src={star} alt="favorites icon" className="slide__icon" />
        Favorites
      </Link>
      <Link to="/profile" onClick={handleClick}>
        <img src={user} alt="user icon" className="slide__icon" />
        Profile
      </Link>
    </Menu>
  );
};

export default Sidebar;
