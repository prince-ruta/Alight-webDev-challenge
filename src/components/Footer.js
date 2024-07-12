import React from 'react';

/**
 * @returns {JSX.Element} The rendered Footer component
 */
export const Footer = () => {
  return (
    <div className='footerBar'>
      <div className='country-location'>Rwanda</div>
      
      <div className='bottom-footer'>
        <div className='footer-one'>
          <ul>
            <li><a href="https://translate.google.com/">About</a></li>
            <li><a href="https://translate.google.com/">Advertising</a></li>
            <li><a href="https://translate.google.com/">Business</a></li>
            <li><a href="https://translate.google.com/">How Search Works</a></li>
          </ul>
        </div>
        
        <div className='footer-two'>
          <ul>
            <li><a href="https://translate.google.com/">Privacy</a></li>
            <li><a href="https://translate.google.com/">Terms</a></li>
            <li><a href="https://translate.google.com/">Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
