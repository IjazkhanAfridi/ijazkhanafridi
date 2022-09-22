import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Home,
  Person,
  FormatListBulleted,
  RssFeed,
  GridView,
  Phone,
  DehazeOutlined,
  Close,
} from '@mui/icons-material';
import logo from '../img/logo.png';
export default function Sidebar() {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const hidesidebar = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <>
      <div className={show ? 'aside-open' : 'aside'}>
        {/* <!-- nav toggler btn --> */}

        <div className={show ? 'nav-toggler-open' : 'nav-toggler'}>
          <span onClick={showSidebar} className={show ? 'span-open' : 'span'}>
           {show ? <Close />: <DehazeOutlined className='span' />}
          </span>
        </div>
        {/* <!-- logo --> */}
        <div className='logo'>
          <Link to='#'>
            <img src={logo} alt='img' />
          </Link>
        </div>

        {/* <!-- nav --> */}
        <ul className='nav'>
          <li>
            <NavLink
              // id='home'
              to='/'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <Home className='fa' />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/About'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <Person className='fa' />
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Services'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <FormatListBulleted className='fa' /> services
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Portfolio'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <GridView className='fa' />
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Blog'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <RssFeed className='fa' /> Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Contact'
              onClick={hidesidebar}
              className={({ isActive }) =>
                isActive ? 'sidebarmenu navactivelink' : 'sidebarmenu'
              }
            >
              <Phone className='fa' /> contact
            </NavLink>
          </li>
        </ul>
        {/* <!-- copyright text --> */}
        <div className='copyrigt-text'>&copy; 2020 all right resarved</div>
      </div>
    </>
  );
}
