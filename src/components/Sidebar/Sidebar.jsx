import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// react icons
import { MdDashboard,  } from 'react-icons/md';
import { FaMoneyCheckAlt, FaSignInAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { ImRocket } from 'react-icons/im';
import ScrollReveal from 'scrollreveal';

import './Sidebar.scss';

const Sidebar = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: false,
          });
          sr.reveal(
            `
            .sidebar,
            .sidebar__logo,
            .list
          `,
            {
              opacity: 0,
              interval: 100,
            }
          );
    }, [])

    
    const navigate = useNavigate()
    const Logout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__logo">
            <div className="icon">
                <MdDashboard />
            </div>
            <div className="logo__name">
                UI 
                Dashboard
            </div>
        </div>
        <ul className='list'>
            <Link to="/">
                <li className='list__item'>
                    <span className='item__icon'>
                    <svg 
                        aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    </span>
                    <span className='item__name'>Dashboard</span>
                </li>
            </Link>
            <Link to="/tables">
                <li className='list__item'>
                    <span className='item__icon'>
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    </span>
                    <span className='item__name'>Tables</span>
                </li>
            </Link>
            <Link to="/billing">
                <li className='list__item'>
                    <span className='item__icon'><FaMoneyCheckAlt /> </span>
                    <span className='item__name'>Billing</span>
                </li>
            </Link>
        </ul>
        <ul className='list mt-5'>
            <p className='fs-6 fw-bolder text-secondary'>ACCOUNT PAGES</p>
            <Link to="/profile">
                <li className='list__item'>
                    <span className='item__icon'>
                        <CgProfile />
                    </span>
                    <span className='item__name'>Profile</span>
                </li>
            </Link>
            <Link to='/signin'>
                <li className='list__item'>
                    <span className='item__icon'>
                        <FaSignInAlt />
                    </span>
                    <span className='item__name'>Sign In</span>
                </li>
            </Link>
                <li className='list__item' onClick={Logout}>
                    <span className='item__icon'>
                        <ImRocket />
                    </span>
                    <span className='item__name'>Log Out</span>
                </li>
        </ul>
        <div className="component bg-info text-white">
            <div className='doc'>DOCUMENTATION</div>
        </div>
        <button className='component upg mt-3 btn btn-info'>UPGRADE TO PRO +</button>
    </div>
  )
}

export default Sidebar