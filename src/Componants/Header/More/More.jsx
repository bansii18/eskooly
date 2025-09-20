// More.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faIdBadge,
  faReceipt,
  faCalendarDays,
  faChartColumn,
  faChartPie,
  faPenToSquare,
  faCartShopping,
  faLock,
  faGear,
  faMessage,
  faVideo,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './More.css';

function More(onuse) {
  const [activeButton, setActiveButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    // Close the menu after clicking an item on small screens
    if (window.innerWidth <= 767) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    // Toggle the menu visibility
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`d-flex ${isMenuOpen ? '' : 'menu-closed'}`}>
      {/* Left Sidebar */}
      <nav className={`sidebar ${isMenuOpen ? '' : 'menu-closed'}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="" id="dashboard">
            <Link
              to="/"
              onClick={() => handleButtonClick('dashboard')}
              className={activeButton === 'dashboard' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className='span'>Dashboard</span>
            </Link>
          </li>
          <li className="" id="admissionletter">
            <Link
              to="/admission-letter"
              onClick={() => handleButtonClick('admissionletter')}
              className={activeButton === 'admissionletter' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faIdBadge} />
              <span className='span'>Admission Letter</span>
            </Link>
          </li>
          <li className="" id="paidfeerecipt">
            <Link
              to="/paidfeerecipt"
              onClick={() => handleButtonClick('paidfeerecipt')}
              className={activeButton === 'paidfeerecipt' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faReceipt} />
              <span className='span'>Paid Fee Receipt</span>
            </Link>
          </li>
          <li className="" id="mytimetable">
            <Link
              to="/timetable"
              onClick={() => handleButtonClick('mytimetable')}
              className={activeButton === 'mytimetable' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className='span'>My Timetable</span>
            </Link>
          </li>
          <li className="" id="myreportcard">
            <Link
              to="/report"
              onClick={() => handleButtonClick('myreportcard')}
              className={activeButton === 'myreportcard' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faChartColumn} />
              <span className='span'>My Report Card</span>
            </Link>
          </li>
          <li className="" id="testresult">
            <Link
              to="/testresult"
              onClick={() => handleButtonClick('testresult')}
              className={activeButton === 'testresult' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faChartPie} />
              <span className='span'>Test Result</span>
            </Link>
          </li>
          <li className="" id="examletter">
            <Link
              to="/exam-letter"
              onClick={() => handleButtonClick('examletter')}
              className={activeButton === 'examletter' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className='span'>Exam Letter</span>
            </Link>
          </li>
          <li className="" id="homeassignment">
            <Link
              to="/homeassignment"
              onClick={() => handleButtonClick('homeassignment')}
              className={activeButton === 'homeassignment' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faCode} />
              <span className='span'>Home Assignment</span>
            </Link>
          </li>
          <li className="" id="onlinestore">
            <Link
              to="/onlinestore"
              onClick={() => handleButtonClick('onlinestore')}
              className={activeButton === 'onlinestore' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className='span'>Online Store</span>
            </Link>
          </li>
          <li className="" id="messaging">
            <Link
              to="/message"
              onClick={() => handleButtonClick('messaging')}
              className={activeButton === 'messaging' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faMessage} />
              <span className='span'>Messaging</span>
            </Link>
          </li>
          <li className="" id="liveclass">
            <Link
              to="/liveclass"
              onClick={() => handleButtonClick('liveclass')}
              className={activeButton === 'liveclass' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faVideo} />
              <span className='span'>Live Class</span>
            </Link>
          </li>
          <li className="" id="accountsettings">
            <Link
              to="/accountsettings"
              onClick={() => handleButtonClick('accountsettings')}
              className={activeButton === 'accountsettings' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faGear} />
              <span className='span'>Account Settings</span>
            </Link>
          </li>
          {/* <li className="" id="logout">
            <Link
              to="/log"
              onClick={() => handleButtonClick('logout')}
              className={activeButton === 'logout' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faLock} />
              <span className='span'>Logout</span>
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* Add a button or icon to toggle the menu visibility */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={isMenuOpen ? 'angle-double-left' : 'angle-double-right'} />
      </button>
    </div>
  );
}

export default More;
