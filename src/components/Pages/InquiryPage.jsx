import React from 'react';
import { useNavigate } from 'react-router-dom';

const InquiryPage = () => {
  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <select className="border border-gray-300 rounded-lg p-2 mr-2">
            <option>Contact No.</option>
            {/* Add other options as needed */}
          </select>
          <input
            type="text"
            placeholder="Search for Client, Name, Phone, E-Mail, Client ID/Biometric ID"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Inquiry</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <InquiryForm />
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "Clients", path: "/clients" },
    { name: "Billing & Payments", path: "/billing-payments" },
    { name: "Sports", path: "/sports" },
    { name: "Attendance", path: "/attendance" },
    { name: "Reports", path: "/reports" },
    { name: "Manage & Settings", path: "/manage-settings" },
    { name: "Forms", path: "/forms" },
    { name: "Feedbacks", path: "/feedbacks" },
  ];

  return (
    <nav className="flex flex-wrap gap-2">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === item.path
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
};

const InquiryForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <InputField label="First Name" placeholder="Enter Name" required />
      <InputField label="Last Name" placeholder="Enter Name" required />
      <InputField label="Contact number" placeholder="Contact Number" required />
      <InputField label="Alternate Contact" placeholder="Alternate Contact" />
      <InputField label="E-Mail" placeholder="Email Account" required />
      <SelectField label="Gender" options={["Male", "Female", "Other"]} required />
      <InputField label="Area Address" placeholder="Area Address" />
      <InputField label="Schedule follow-up" type="date" required />
      <InputField label="Schedule follow-up time" placeholder="Enter Time" />
      <InputField label="Assessment date" type="date" />
      <SelectField label="Status" options={["Pending", "Completed"]} required />
      <SelectField label="Convertibility" options={["Warm", "Cold"]} required />
      <SelectField label="Source of Inquiry" options={["--Select--"]} required />
      <SelectField label="Inquiry for" options={["--Select--"]} required />
      <InputField label="Attended by" placeholder="Admin" />
      <InputField label="Response / feedback" placeholder="" required />
      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center">
        <input type="checkbox" id="sendNotifications" className="mr-2" />
        <label htmlFor="sendNotifications">Send Text & Email</label>
      </div>
      <button
        type="submit"
        className="col-span-1 md:col-span-2 lg:col-span-4 bg-pink-500 text-white p-2 rounded-lg shadow-lg mt-4"
      >
        CREATE INQUIRY
      </button>
    </form>
  );
};

const InputField = ({ label, placeholder, type = "text", required }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg p-2"
        required={required}
      />
    </div>
  );
};

const SelectField = ({ label, options, required }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select className="border border-gray-300 rounded-lg p-2" required={required}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InquiryPage;
