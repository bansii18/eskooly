// Header.jsx

import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBell, faGripLines, faCog } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assests/logo.png';
import Apple from '../../Assests/apple.png';
import Google from '../../Assests/google.png';
import Expand from "../../Assests/expand.png"
import NoImage from '../../Assests/no-image.png';
import More from '../../Assests/more.png';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';

function Header({ onMoreClick }) {
  const [notifications, setNotifications] = useState({
    comment: 0,
    bell: 1,
  });

  const [showHamburger, setShowHamburger] = useState(false);
  // const [showMore, setShowMore] = useState(false);

  const toggleFullScreen = () => {
    console.log('Toggle Full Screen');
    if (document.fullscreenElement) {
      // Exit full screen
      document.exitFullscreen();
    } else {
      // Enter full screen
      document.documentElement.requestFullscreen();
    }
  };

  const handleNotificationClick = (type) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [type]: 0,
    }));
  };

  // const handleHamburgerClick = () => {
  //   setShowHamburger(!showHamburger);
  //   // setShowMore(false); // Close More when Hamburger is clicked
  // };

  // const handleMoreClick = () => {
  //   setShowMore(!showMore);
  //   // setShowHamburger(false); // Close Hamburger when More is clicked
  // };

  // const closeBothMenus = () => {
  //   setShowHamburger(false);
  //   setShowMore(false);
  // };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className={`navbar${showHamburger ? ' expanded' : ''}`}>
        <Container>
          <Navbar.Brand href="https://eskooly.com">
            <img
              className="img-fluid m-l-30"
              src={Logo}
              style={{ maxHeight: '45px', paddingLeft: '35px' }}
              alt="Theme-Logo"
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="" className='more'>
              <img src={More} alt="More" style={{ width: '60%' }} onClick={onMoreClick} />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={Expand} className='expand' alt="Expand" style={{ width: '60%' }} onClick={toggleFullScreen} />
            </Nav.Link>
          </Nav>

          {showHamburger && (
            <HamburgerMenu
              handleNotificationClick={handleNotificationClick}
              notifications={notifications}
            />
          )}

          <Nav className="me-5">
            <Nav.Link href="https://apps.apple.com/pk/app/eskooly/id6448073356">
              <img src={Apple} style={{ width: '120px' }} alt="Apple Store" />
            </Nav.Link>
            <Nav.Link href="https://play.google.com/store/apps/details?id=com.eskooly.app">
              <img src={Google} style={{ width: '120px' }} alt="Google Play Store" />
            </Nav.Link>

            <Nav.Link href="#" onClick={() => handleNotificationClick('bell')}>
              <FontAwesomeIcon
                icon={faBell}
                className={notifications.bell > 0 ? 'icon-with-notification' : ''}
              />
              <span id="msgaya" className="badge bg-c-green f-10">
                {notifications.bell}
              </span>
            </Nav.Link>

            <Nav.Link href="#" onClick={() => handleNotificationClick('comment')}>
              <FontAwesomeIcon
                icon={faComment}
                className={notifications.comment > 0 ? 'icon-with-notification' : ''}
              />
              <span className="badge bg-c-yellow f-10">{notifications.comment}</span>
            </Nav.Link>

            <Nav.Link href="#">
              <img
                src={NoImage}
                style={{ width: '40px', height: '40px' }}
                className="img-radius"
                alt="User"
              />
            </Nav.Link>
          
              <NavDropdown title="Anuj Pandey" id="basic-nav-dropdown" className='style'>
                <NavDropdown.Item href="#">Account Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
              </NavDropdown>
            

          </Nav>

          <Nav classname="display">
            {/* <Nav.Link
              href="#"
              className={`hamburger-icon ${showHamburger ? 'active' : ''}`}
              onClick={handleHamburgerClick}
            >
              <FontAwesomeIcon icon={faCog} className='gripline' />
            </Nav.Link> */}

          </Nav>

        </Container>
      </Navbar>
      {/* {showMore && <More onClose={closeBothMenus} />}    */}
    </>
  );
}

export default Header;
