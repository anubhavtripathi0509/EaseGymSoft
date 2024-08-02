import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaRegClock, FaDollarSign, FaCalendarAlt, FaBirthdayCake, FaGift, FaCalendarDay, FaTachometerAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quick-manage');

  const handleNavigation = (path, tab) => {
    navigate(path);
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-md w-64 p-4 rounded-lg">
      <div
        className={`flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer ${activeTab === 'quick-manage' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'hover:bg-gray-200'}`}
        onClick={() => handleNavigation('/', 'quick-manage')}
      >
        <FaTachometerAlt className="text-gray-700" />
        <span>Quick Manage</span>
      </div>
      <ul className="mt-4 space-y-2">
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'follow-ups' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/followups', 'follow-ups')}
        >
          <FaPhone className="text-gray-700" />
          <span>Follow-ups</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'pending-inquiries' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/pending-inquiries', 'pending-inquiries')}
        >
          <FaRegClock className="text-gray-700" />
          <span>Pending Inquiries</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'pending-payments' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/pending-payments', 'pending-payments')}
        >
          <FaDollarSign className="text-gray-700" />
          <span>Pending Payments</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'upcoming-renewals' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/upcoming-renewals', 'upcoming-renewals')}
        >
          <FaCalendarAlt className="text-gray-700" />
          <span>Upcoming Renewals</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'inconsistent-clients' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/inconsistent-clients', 'inconsistent-clients')}
        >
          <FaCalendarDay className="text-gray-700" />
          <span>Inconsistent Clients</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'birthdays' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/birthdays', 'birthdays')}
        >
          <FaBirthdayCake className="text-gray-700" />
          <span>Birthdays</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'anniversaries' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/anniversaries', 'anniversaries')}
        >
          <FaGift className="text-gray-700" />
          <span>Anniversaries</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'todays-schedule' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/todays-schedule', 'todays-schedule')}
        >
          <FaCalendarDay className="text-gray-700" />
          <span>Today's Schedule</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
