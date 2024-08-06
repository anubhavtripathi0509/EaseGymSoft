// Layout.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4 bg-blue-50 min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;