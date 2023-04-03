import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div id='footer' className='d-flex justify-content-between'>
        <div className="made">
            Made with ❤ by
            <span>
                <a href="https://github.com/al1sherdev">Alisherdev</a>
            </span>
        </div>
        <div className="links d-flex">
            <p>GitHub</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>License</p>
        </div>
    </div>

  )
}

export default Footer