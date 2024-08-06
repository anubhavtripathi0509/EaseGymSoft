import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainContent from './components/Pages/MainContent';
import InquiryPage from './components/Pages/InquiryPage';
import InquiryPageTable from './components/InquiryPageTable';
import FollowUpPage from './components/Pages/FollowUpPage';

// Context
import { InquiryProvider } from './components/Context/InquiryContext';

const App = () => {
  const [inquiries, setInquiries] = useState(() => {
    const savedInquiries = localStorage.getItem('inquiries');
    return savedInquiries ? JSON.parse(savedInquiries) : [];
  });

  useEffect(() => {
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  return (
    <InquiryProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/inquiry" element={<InquiryPage setInquiries={setInquiries} />} />
          <Route 
            path="/inquiry-table" 
            element={<InquiryPageTable inquiries={inquiries} setInquiries={setInquiries} filterStatus="Pending" />} 
          />
          <Route path="/followups" element={<FollowUpPage />} />
        </Routes>
      </Layout>
    </Router>
    </InquiryProvider>
  );
};

export default App;
