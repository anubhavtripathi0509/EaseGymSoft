import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "Clients", path: "/clients" },
    { name: "Billing & Payments", path: "/billing" },
    { name: "Sports", path: "/sports" },
    { name: "Attendance", path: "/attendance" },
    { name: "Reports", path: "/reports" },
    { name: "Manage & Settings", path: "/settings" },
    { name: "Forms", path: "/forms" },
    { name: "Feedbacks", path: "/feedbacks" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
      <nav className="flex flex-wrap gap-2 mb-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
