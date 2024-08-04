import React, { useState } from 'react';
import Navbar from '../Navbar';
import InquiryPageTable from '../InquiryPageTable';

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    alternateContact: '',
    email: '',
    gender: '',
    areaAddress: '',
    followUpDate: '',
    followUpTime: '',
    assessmentDate: '',
    status: '',
    convertibility: '',
    sourceOfInquiry: '',
    inquiryFor: '',
    attendedBy: '',
    responseFeedback: '',
    sendNotifications: false,
  });

  const [inquiries, setInquiries] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInquiry = {
      id: Date.now(),
      clientName: `${formData.firstName} ${formData.lastName}`,
      contactNumber: formData.contactNumber,
      followUpDate: formData.followUpDate,
      followUpTime: formData.followUpTime,
      assessmentDate: formData.assessmentDate,
      status: formData.status,
      convertibility: formData.convertibility,
      sourceOfInquiry: formData.sourceOfInquiry,
      inquiryFor: formData.inquiryFor,
      attendedBy: formData.attendedBy,
      responseFeedback: formData.responseFeedback,
      sendNotifications: formData.sendNotifications,
    };
    setInquiries([...inquiries, newInquiry]);
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      alternateContact: '',
      email: '',
      gender: '',
      areaAddress: '',
      followUpDate: '',
      followUpTime: '',
      assessmentDate: '',
      status: '',
      convertibility: '',
      sourceOfInquiry: '',
      inquiryFor: '',
      attendedBy: '',
      responseFeedback: '',
      sendNotifications: false,
    });
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <Navbar />
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Inquiry</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <InquiryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="mt-6">
          <InquiryPageTable inquiries={inquiries} setInquiries={setInquiries} />
        </div>
      </div>
    </div>
  );
};

const InquiryForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Enter Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Contact Number"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        required
      />
      <InputField
        label="Alternate Contact"
        name="alternateContact"
        placeholder="Alternate Contact"
        value={formData.alternateContact}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        placeholder="Email Account"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Gender"
        name="gender"
        options={["Male", "Female", "Other"]}
        value={formData.gender}
        onChange={handleChange}
        required
      />
      <InputField
        label="Area Address"
        name="areaAddress"
        placeholder="Area Address"
        value={formData.areaAddress}
        onChange={handleChange}
      />
      <InputField
        label="Follow-Up Date"
        name="followUpDate"
        type="date"
        value={formData.followUpDate}
        onChange={handleChange}
        required
      />
      <InputField
        label="Follow-Up Time"
        name="followUpTime"
        placeholder="Enter Time"
        value={formData.followUpTime}
        onChange={handleChange}
      />
      <InputField
        label="Assessment Date"
        name="assessmentDate"
        type="date"
        value={formData.assessmentDate}
        onChange={handleChange}
      />
      <SelectField
        label="Status"
        name="status"
        options={["Pending", "Completed"]}
        value={formData.status}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Convertibility"
        name="convertibility"
        options={["Warm", "Cold"]}
        value={formData.convertibility}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Source of Inquiry"
        name="sourceOfInquiry"
        options={["--Select--"]}
        value={formData.sourceOfInquiry}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Inquiry For"
        name="inquiryFor"
        options={["--Select--"]}
        value={formData.inquiryFor}
        onChange={handleChange}
        required
      />
      <InputField
        label="Attended By"
        name="attendedBy"
        placeholder="Admin"
        value={formData.attendedBy}
        onChange={handleChange}
        required
      />
      <InputField
        label="Response Feedback"
        name="responseFeedback"
        placeholder="Response/Feedback"
        value={formData.responseFeedback}
        onChange={handleChange}
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="sendNotifications"
          name="sendNotifications"
          checked={formData.sendNotifications}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="sendNotifications" className="ml-2 text-sm text-gray-600">
          Send Notifications
        </label>
      </div>
      <button
        type="submit"
        className="col-span-1 md:col-span-2 lg:col-span-4 bg-pink-500 text-white p-2 rounded-lg shadow-lg mt-4"
      >
        Create Inquiry
      </button>
    </form>
  );
};

const InputField = ({ label, name, type = "text", placeholder, value, onChange, required }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg p-2 w-full"
      required={required}
    />
  </div>
);

const SelectField = ({ label, name, options, value, onChange, required }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg p-2 w-full"
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default InquiryPage;
