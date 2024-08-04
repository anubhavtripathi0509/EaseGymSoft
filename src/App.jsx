import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/Pages/MainContent';
import InquiryPage from './components/Pages/InquiryPage';
import InquiryPageTable from './components/InquiryPageTable';
import FollowUpPage from './components/Pages/FollowUpPage';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/inquiry" element={<InquiryPage />} />
            <Route path="/inquiry-table" element={<InquiryPageTable />} />
            <Route path="/followups" element={<FollowUpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;