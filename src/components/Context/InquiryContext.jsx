import React, { createContext, useState, useEffect } from 'react';

const InquiryContext = createContext();

const InquiryProvider = ({ children }) => {
  const [inquiries, setInquiries] = useState(() => {
    const savedInquiries = localStorage.getItem('inquiries');
    return savedInquiries ? JSON.parse(savedInquiries) : [];
  });

  useEffect(() => {
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  return (
    <InquiryContext.Provider value={{ inquiries, setInquiries }}>
      {children}
    </InquiryContext.Provider>
  );
};

export { InquiryContext, InquiryProvider };
