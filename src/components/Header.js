import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlask } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../image/profile.jpg';
import gridIcon from '../image/gridIcon.png';

/**
 * @returns {JSX.Element} The rendered Header component
 */
export const Header = () => {
  return (
    <div className='topNav-container'>
      <ul className='topNav'>
        
        <div className='topNav-firstMiddle-container'>
          <li><a href="https://www.pexels.com/">Gmail</a></li>
          <li><a href="https://www.pexels.com/">Images</a></li>
          <li><a href="https://www.pexels.com/"><FontAwesomeIcon icon={faFlask} /></a></li>
        </div>

        <div className='topNav-secondMiddle-container'>
          <li><img src={gridIcon} alt="" className='grid-icon'/></li>
          <button className='signin-button'>
            <a href="https://www.linkedin.com/in/prince-rutagengwa/">
              <img src={profilePic} alt="profile" className='profile-photo'/>
            </a>
          </button>
        </div>
        
      </ul>
    </div>
  )
}
