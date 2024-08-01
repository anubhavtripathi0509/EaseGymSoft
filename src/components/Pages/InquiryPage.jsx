import React, { useState } from 'react';
import Navbar from '../Navbar';
import FollowUp from '../FollowUP';

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

  const [followUps, setFollowUps] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFollowUp = {
      id: Date.now(),
      clientName: `${formData.firstName} ${formData.lastName}`,
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
    setFollowUps([...followUps, newFollowUp]);
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
        
      <div className="flex justify-between items-center mb-4">
        <div>
          <select className="border border-gray-300 rounded-lg p-2 mr-2">
            <option>Contact No.</option>
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
        <InquiryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <FollowUp followUps={followUps} />
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
        label="Contact number"
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
        label="E-Mail"
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
        label="Schedule follow-up"
        name="followUpDate"
        type="date"
        value={formData.followUpDate}
        onChange={handleChange}
        required
      />
      <InputField
        label="Schedule follow-up time"
        name="followUpTime"
        placeholder="Enter Time"
        value={formData.followUpTime}
        onChange={handleChange}
      />
      <InputField
        label="Assessment date"
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
        label="Inquiry for"
        name="inquiryFor"
        options={["--Select--"]}
        value={formData.inquiryFor}
        onChange={handleChange}
        required
      />
      <InputField
        label="Attended by"
        name="attendedBy"
        placeholder="Admin"
        value={formData.attendedBy}
        onChange={handleChange}
      />
      <InputField
        label="Response / feedback"
        name="responseFeedback"
        placeholder=""
        value={formData.responseFeedback}
        onChange={handleChange}
        required
      />
      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center">
        <input
          type="checkbox"
          id="sendNotifications"
          name="sendNotifications"
          className="mr-2"
          checked={formData.sendNotifications}
          onChange={handleChange}
        />
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

const InputField = ({ label, placeholder, type = "text", name, value, onChange, required }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg p-2"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

const SelectField = ({ label, options, name, value, onChange, required }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        className="border border-gray-300 rounded-lg p-2"
        value={value}
        onChange={onChange}
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
};

export default InquiryPage;
