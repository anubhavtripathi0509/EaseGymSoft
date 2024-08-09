import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { InquiryContext } from './Context/InquiryContext';

const InquiryPageTable = ({ filterStatus }) => {
  const { inquiries, setInquiries } = useContext(InquiryContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownButtonRefs = useRef([]);

  useEffect(() => {
    setSearchTerm('');
  }, [inquiries]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStatusChange = (index, status) => {
    const updatedInquiries = inquiries.map((inquiry, i) =>
      i === index ? { ...inquiry, status } : inquiry
    );
    setInquiries(updatedInquiries);
  };

  const handleDelete = (index) => {
    const updatedInquiries = inquiries.filter((_, i) => i !== index);
    setInquiries(updatedInquiries);
  };

  const filteredInquiries = inquiries.filter((inquiry) =>
    (filterStatus ? inquiry.status === filterStatus : true) &&
    (inquiry.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.contactNumber.includes(searchTerm) ||
    inquiry.inquiryFor.toLowerCase().includes(searchTerm) ||
    inquiry.attendedBy.toLowerCase().includes(searchTerm) ||
    inquiry.status.toLowerCase().includes(searchTerm))
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-2">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Follow-Up List</h2>
      </div>
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="Search for Client, Name, Phone, E-Mail, Client ID/Biometric ID"
          className="border border-gray-300 rounded-lg p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Number</th>
              <th className="py-2 px-4 border-b">For</th>
              <th className="py-2 px-4 border-b">Next follow-up</th>
              <th className="py-2 px-4 border-b">Rep.</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInquiries.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4">No records found</td>
              </tr>
            ) : (
              filteredInquiries.map((inquiry, index) => (
                <tr key={inquiry.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{inquiry.clientName}</td>
                  <td className="py-2 px-4 border-b">{inquiry.contactNumber}</td>
                  <td className="py-2 px-4 border-b">{inquiry.inquiryFor}</td>
                  <td className="py-2 px-4 border-b">{inquiry.followUpDate}</td>
                  <td className="py-2 px-4 border-b">{inquiry.attendedBy}</td>
                  <td className="py-2 px-4 border-b">{inquiry.status}</td>
                  <td className="py-2 px-4 border-b relative">
                    <button
                      ref={(el) => (dropdownButtonRefs.current[index] = el)}
                      onClick={() => handleDropdownToggle(index)}
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-pink-500 text-white text-sm font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                    >
                      Action <FaEllipsisV className="ml-2" />
                    </button>
                    {openDropdown === index && createPortal(
                      <div
                        ref={dropdownRef}
                        className="absolute z-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                        style={{
                          top: dropdownButtonRefs.current[index].getBoundingClientRect().bottom + window.scrollY,
                          left: dropdownButtonRefs.current[index].getBoundingClientRect().left + window.scrollX,
                        }}
                      >
                        <a
                          onClick={() => handleStatusChange(index, 'Pending')}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Pending
                        </a>
                        <a
                          onClick={() => handleStatusChange(index, 'Done')}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Done
                        </a>
                        <a
                          onClick={() => handleDelete(index)}
                          className="block px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                        >
                          Delete
                        </a>
                      </div>,
                      document.body
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryPageTable;
