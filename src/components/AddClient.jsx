import React, { useState } from 'react';

const AddClient = () => {
  const [formData, setFormData] = useState({
    invoice_id: '00001',
    invoice_date: '2024-08-09',
    member_id: '21',
    client_name: '',
    contact_number: '',
    alternate_contact: '',
    email: '',
    client_source: '',
    joining_date: '2024-08-09',
    package: '',
    price: '0.00',
    discount: '',
    admission_charges: '0',
    tax: 'No tax (0%)',
    redeem_rewards: '0.00',
    amount_payable: '0.00',
    amount_paid: '',
    payment_mode: 'Branch 1 Mode',
    balance: '0.00',
    client_representative: '',
    appoint_trainer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/add-client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Client added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add client.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the client.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Client</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Invoice ID</label>
            <input
              type="text"
              name="invoice_id"
              className="border rounded w-full py-2 px-3"
              value={formData.invoice_id}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">Invoice date</label>
            <input
              type="date"
              name="invoice_date"
              className="border rounded w-full py-2 px-3"
              value={formData.invoice_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Member ID</label>
            <input
              type="text"
              name="member_id"
              className="border rounded w-full py-2 px-3"
              value={formData.member_id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client name</label>
            <select
              name="client_name"
              className="border rounded w-full py-2 px-3"
              value={formData.client_name}
              onChange={handleChange}
            >
              <option>--select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <select
              name="contact_number"
              className="border rounded w-full py-2 px-3"
              value={formData.contact_number}
              onChange={handleChange}
            >
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Alternate contact</label>
            <input
              type="text"
              name="alternate_contact"
              className="border rounded w-full py-2 px-3"
              value={formData.alternate_contact}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client source</label>
            <select
              name="client_source"
              className="border rounded w-full py-2 px-3"
              value={formData.client_source}
              onChange={handleChange}
            >
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Joining date</label>
            <input
              type="date"
              name="joining_date"
              className="border rounded w-full py-2 px-3"
              value={formData.joining_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Package</label>
            <select
              name="package"
              className="border rounded w-full py-2 px-3"
              value={formData.package}
              onChange={handleChange}
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              className="border rounded w-full py-2 px-3"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Discount</label>
            <input
              type="text"
              name="discount"
              className="border rounded w-full py-2 px-3"
              value={formData.discount}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Admission Charges</label>
            <input
              type="text"
              name="admission_charges"
              className="border rounded w-full py-2 px-3"
              value={formData.admission_charges}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Tax</label>
            <select
              name="tax"
              className="border rounded w-full py-2 px-3"
              value={formData.tax}
              onChange={handleChange}
            >
              <option>No tax (0%)</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Redeem Rewards</label>
            <input
              type="text"
              name="redeem_rewards"
              className="border rounded w-full py-2 px-3"
              value={formData.redeem_rewards}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Amount payable</label>
            <input
              type="text"
              name="amount_payable"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_payable}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Amount paid</label>
            <input
              type="text"
              name="amount_paid"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_paid}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Payment mode</label>
            <select
              name="payment_mode"
              className="border rounded w-full py-2 px-3"
              value={formData.payment_mode}
              onChange={handleChange}
            >
              <option>Branch 1 Mode</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Balance</label>
            <input
              type="text"
              name="balance"
              className="border rounded w-full py-2 px-3"
              value={formData.balance}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client representative</label>
            <select
              name="client_representative"
              className="border rounded w-full py-2 px-3"
              value={formData.client_representative}
              onChange={handleChange}
            >
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Appoint Trainer</label>
            <select
              name="appoint_trainer"
              className="border rounded w-full py-2 px-3"
              value={formData.appoint_trainer}
              onChange={handleChange}
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Save and Print
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
