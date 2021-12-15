import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import { SvgIcon } from '@mui/material';

const Sidebar = function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);
  const token = useSelector((store) => store.login);

  return (
    <Menu
      OuterContainerId="main"
      width={250}
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link to="/" onClick={handleClick}>
        <SvgIcon component={HomeIcon} alt="home icon" className="slide__icon" />
        Home
      </Link>
      <Link to={token ? './bikes/favorite' : './login'} onClick={handleClick}>
        <SvgIcon component={StarIcon} alt="user icon" className="slide__icon" />
        Favorite Bikes
      </Link>
      <Link to={token ? './bikes/owned' : './login'} onClick={handleClick}>
        <SvgIcon component={AssignmentTurnedInIcon} alt="user icon" className="slide__icon" />
        Your Bikes
      </Link>
      <Link to={token ? './addbike' : './login'} onClick={handleClick}>
        <SvgIcon component={AddIcon} alt="favorites icon" className="slide__icon" />
        Add Bike
      </Link>

    </Menu>
  );
};

export default Sidebar;
