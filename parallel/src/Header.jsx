import React from 'react';
import './styles/Header.css';
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom'; // Import navigation hook

const Header = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleProfileClick = () => {
    navigate('/profileview'); // Navigate to the ProfileView page
  };

  const handleMatchmakingClick = () => {
    navigate('/matchmaking'); // Navigate to the Matchmaking page
  };

  const handleChatClick = () => {
    navigate('/chat'); // Navigate to the Chat page
  };

  return (
    <div className='header'>
      <PersonIcon className='header-icon' onClick={handleProfileClick} />
      <DensityLargeIcon className='header-icon' onClick={handleMatchmakingClick} />
      <MessageIcon className='header-icon' onClick={handleChatClick} /> {/* New Chat Page */}
    </div>
  );
};

export default Header;
