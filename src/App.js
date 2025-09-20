import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admissionletter from './Componants/Admission-letter/Admission-letter';
import Header from './Componants/Header/Header';
import More from './Componants/Header/More/More';
import Report from './Componants/Report/Report';
import TimeTable from './Componants/Time-Table/TimeTable';
import OnlineStore from './Componants/OnlineStore/OnlineStore';
import TestResult from './Componants/TestResult/TestResult';
import ExamResult from './Componants/ExamResult/ExamResult';
import Message from './Componants/Message/Message';
import AccountSetting from './Componants/AccountSetting/AccountSetting';
import Login from './Componants/Login/Login';
import HamburgerMenu from './Componants/Header/HamburgerMenu';
import { useEffect } from 'react';
import DashBoard from './Componants/Dashboard/Dashboard';
import PaidFeeRecipt from "./Componants/PaidFeeRecipt/PaidFeeRecipt"
import HomeAssignment from './Componants/HomeAssignmet/HomeAssignment';
import LiveClass from "./Componants/LiveClass/LiveClass"
import "./App.css"

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMoreClick = () => {
    setShowMoreContent(!showMoreContent);
  };



  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  // if (!isLoggedIn) {
  //   return (
  //     <div className="App">
  //       <Login setIsLoggedIn={handleLoginSuccess} />
  //     </div>
  //   );
  // } else {
    return (
      <div className="App">
{isSmallScreen ? <HamburgerMenu/>:<Header onMoreClick={handleMoreClick} /> }         
          {showMoreContent && <More />}
          {!isSmallScreen && <More />}

          <Routes>
          <Route path="/" element={<DashBoard />} />
            <Route path="/Admission-letter" element={<Admissionletter />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/report" element={<Report />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/paidfeerecipt" element={<PaidFeeRecipt />} />
            <Route path="/homeAssignment" element={<HomeAssignment />} />
            <Route path="/onlinestore" element={<OnlineStore />} />
            <Route path="/Exam-letter" element={<ExamResult />} />
            <Route path="/liveclass" element={<LiveClass />} />
            <Route path="/message" element={<Message />} />
            <Route path="/accountsettings" element={<AccountSetting />} />
          </Routes>
      
      </div>
    );
  }


export default App;