import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/Pages/MainContent';
import InquiryPage from './components/Pages/InquiryPage';
import FollowUpPage from './components/Pages/FollowUpPage';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/inquiry" element={<InquiryPage />} />
            <Route path="/followups" element={<FollowUpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;