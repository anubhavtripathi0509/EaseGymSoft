import React from 'react';
import Navbar from '../Navbar';
import { FaRegChartBar, FaRegCalendarAlt, FaUserPlus, FaRupeeSign, FaUserClock, FaHeartbeat, FaCalendarCheck, FaUserTie, FaClipboardList, FaCalendarDay, FaWalking } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      {/* <Navbar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="New clients" value="3" color="bg-green-100" icon={<FaUserPlus className="text-green-500" />} />
        <StatCard title="Total collection" value="2,003.00" color="bg-purple-100" icon={<FaRegChartBar className="text-purple-500" />} />
        <StatCard title="Total Expenses" value="0" color="bg-red-100" icon={<FaRupeeSign className="text-red-500" />} />
        <StatCard title="Profit/Loss" value="2,003.00" color="bg-red-100" icon={<FaRupeeSign className="text-red-500" />} />
        <StatCard title="Pending Inquiry(s)" value="0" color="bg-green-100" icon={<FaUserClock className="text-green-500" />} />
        <StatCard title="Active clients" value="6" color="bg-blue-100" icon={<FaHeartbeat className="text-blue-500" />} />
        <StatCard title="Booked PT Sessions" value="2" color="bg-blue-100" icon={<FaCalendarCheck className="text-blue-500" />} />
        <StatCard title="Follow-ups" value="1" color="bg-red-100" icon={<FaUserTie className="text-red-500" />} />
        <StatCard title="Today Present Client" value="1" color="bg-purple-100" icon={<FaClipboardList className="text-purple-500" />} />
      </div>
      <div className="flex space-x-4 mb-4">
        <ButtonCard 
          title="Create Walk-In" 
          color="bg-gradient-to-r from-pink-500 to-purple-500" 
          icon={<FaWalking className="text-white" />} 
        />
        <ButtonCard 
          title="Create Client" 
          color="bg-gradient-to-r from-purple-500 to-blue-500" 
          icon={<FaUserPlus className="text-white" />} 
          navigateTo="/addclients"
        />
        <ButtonCard 
          title="Create Booking" 
          color="bg-gradient-to-r from-green-500 to-teal-500" 
          icon={<FaRegCalendarAlt className="text-white" />} 
        />
        <ButtonCard 
          title="Add training plan" 
          color="bg-gradient-to-r from-red-500 to-pink-500" 
          icon={<FaHeartbeat className="text-white" />} 
        />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color, icon }) => {
  return (
    <div className={`p-4 ${color} rounded-lg shadow-md flex items-center`}>
      <div className="text-2xl mr-4">
        {icon}
      </div>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
};

const ButtonCard = ({ title, color, icon, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div 
      onClick={handleClick} 
      className={`p-4 ${color} rounded-lg shadow-md flex items-center justify-center cursor-pointer`}
    >
      <div className="text-2xl mr-2">
        {icon}
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
    </div>
  );
};

export default MainContent;