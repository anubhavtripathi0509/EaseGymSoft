import React from 'react';

const AddClient = () => {
  return (
    // <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
      <h2 className="text-xl font-semibold">Create new Client</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Invoice ID</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="00001" disabled />
          </div>

          <div>
            <label className="block text-gray-700">Invoice date</label>
            <input type="date" className="border rounded w-full py-2 px-3" value="2024-08-09" />
          </div>

          <div>
            <label className="block text-gray-700">Member ID</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="21" />
          </div>

          <div>
            <label className="block text-gray-700">Client name</label>
            <select className="border rounded w-full py-2 px-3">
              <option>--select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <select className="border rounded w-full py-2 px-3">
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Alternate contact</label>
            <input type="text" className="border rounded w-full py-2 px-3" />
          </div>

          <div>
            <label className="block text-gray-700">E-mail</label>
            <input type="email" className="border rounded w-full py-2 px-3" />
          </div>

          <div>
            <label className="block text-gray-700">Client source</label>
            <select className="border rounded w-full py-2 px-3">
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Joining date</label>
            <input type="date" className="border rounded w-full py-2 px-3" value="2024-08-09" />
          </div>

          <div>
            <label className="block text-gray-700">Package</label>
            <select className="border rounded w-full py-2 px-3">
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="0.00" />
          </div>

          <div>
            <label className="block text-gray-700">Discount</label>
            <input type="text" className="border rounded w-full py-2 px-3" />
          </div>

          <div>
            <label className="block text-gray-700">Admission Charges</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="0" />
          </div>

          <div>
            <label className="block text-gray-700">Tax</label>
            <select className="border rounded w-full py-2 px-3">
              <option>No tax (0%)</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Redeem Rewards</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="0.00" />
          </div>

          <div>
            <label className="block text-gray-700">Amount payable</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="0.00" />
          </div>

          <div>
            <label className="block text-gray-700">Amount paid</label>
            <input type="text" className="border rounded w-full py-2 px-3" />
          </div>

          <div>
            <label className="block text-gray-700">Payment mode</label>
            <select className="border rounded w-full py-2 px-3">
              <option>Branch 1 Mode</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Balance</label>
            <input type="text" className="border rounded w-full py-2 px-3" value="0.00" />
          </div>

          <div>
            <label className="block text-gray-700">Client representative</label>
            <select className="border rounded w-full py-2 px-3">
              <option>--Select--</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Appoint trainer</label>
            <select className="border rounded w-full py-2 px-3">
              <option>Select trainer</option>
              {/* Add options here */}
            </select>
          </div>

          <div className="col-span-2 flex items-center">
            <label className="text-gray-700">More details</label>
            <a href="#" className="text-blue-500 ml-2">More details</a>
          </div>

          <div className="col-span-2 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Send Text & eMail</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Send WhatsApp</label>
            </div>
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <button type="submit" className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
