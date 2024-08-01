import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaRegClock, FaDollarSign, FaCalendarAlt, FaBirthdayCake, FaGift, FaCalendarDay } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-white shadow-md w-64 p-4 rounded-lg">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-t-lg font-semibold">
        Quick Manage
      </div>
      <ul className="mt-4 space-y-2">
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/inquiry')}
        >
          <FaPhone className="text-gray-700" />
          <span>Follow-ups</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/pending-inquiries')}
        >
          <FaRegClock className="text-gray-700" />
          <span>Pending Inquiries</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/pending-payments')}
        >
          <FaDollarSign className="text-gray-700" />
          <span>Pending Payments</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/upcoming-renewals')}
        >
          <FaCalendarAlt className="text-gray-700" />
          <span>Upcoming Renewals</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/inconsistent-clients')}
        >
          <FaCalendarDay className="text-gray-700" />
          <span>Inconsistent Clients</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/birthdays')}
        >
          <FaBirthdayCake className="text-gray-700" />
          <span>Birthdays</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/anniversaries')}
        >
          <FaGift className="text-gray-700" />
          <span>Anniversary</span>
        </li>
        <li
          className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => handleNavigation('/todays-schedule')}
        >
          <FaCalendarDay className="text-gray-700" />
          <span>Today's Schedule</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;