import React, { useState } from 'react';
import skooly from "../../Assests/eskooly.png";
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

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={skooly} style={{ width: "84px" }} alt="skooly logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`offcanvas offcanvas-end ${menuOpen ? 'show' : ''}`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={skooly} style={{ width: "84px" }} alt="skooly logo" />
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={toggleMenu}
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" onClick={closeMenu}>
                <Link className='nav-link' to="/">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className='nav-link' to="/admission-letter">
                  <FontAwesomeIcon icon={faIdBadge} />
                  <span>Admission Letter</span>
                </Link>
              </li>
          
        
          <li className="nav-item" id="paidfeerecipt" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/paidfeerecipt"

          
            >
              <FontAwesomeIcon icon={faReceipt} />
              <span>Paid Fee Receipt</span>
            </Link>
          </li>
          <li className="nav-item" id="mytimetable" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/timetable"
            
          
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>My Timetable</span>
            </Link>
          </li>
          <li className="nav-item" id="myreportcard" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/report"
              
             
            >
              <FontAwesomeIcon icon={faChartColumn} />
              <span>My Report Card</span>
            </Link>
          </li>
          <li className="nav-item" id="testresult" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/testresult"
         
            >
              <FontAwesomeIcon icon={faChartPie} />
              <span>Test Result</span>
            </Link>
          </li>
          <li className="nav-item" id="examletter" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/exam-letter"
          
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              <span>Exam Letter</span>
            </Link>
          </li>
          <li className="nav-item" id="homeassignment" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="#"
          
            >
              <FontAwesomeIcon icon={faCode} />
              <span>Home Assignment</span>
            </Link>
          </li>
          <li className="nav-item" id="onlinestore" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/onlinestore"
        
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Online Store</span>
            </Link>
          </li>
          <li className="nav-item" id="messaging" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/message"
             
            >
              <FontAwesomeIcon icon={faMessage} />
              <span>Messaging</span>
            </Link>
          </li>
          <li className="nav-item" id="liveclass" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/liveclass"
             
            >
              <FontAwesomeIcon icon={faVideo} />
              <span>Live Class</span>
            </Link>
          </li>
          <li className="nav-item" id="accountsettings" onClick={closeMenu}>
            <Link
              className='nav-link'
              to="/accountsettings"
            
            >
              <FontAwesomeIcon icon={faGear} />
              <span>Account Settings</span>
            </Link>
          </li>
          {/* <li className="nav-item" id="logout">
            <Link
              className='nav-link'
              to="/log"
              onClick={() => handleButtonClick('logout')}
              className={activeButton === 'logout' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faLock} />
              <span>Logout</span>
            </Link>
          </li> */}
        </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  
  
  )
}

export default HamburgerMenu;