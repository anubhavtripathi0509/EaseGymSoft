import React from 'react';

const FollowUp = ({ followUps }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Follow-Up List</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client Name</th>
            <th className="py-2 px-4 border-b">Follow-Up Date</th>
            <th className="py-2 px-4 border-b">Follow-Up Time</th>
            <th className="py-2 px-4 border-b">Assessment Date</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Convertibility</th>
            <th className="py-2 px-4 border-b">Source of Inquiry</th>
            <th className="py-2 px-4 border-b">Inquiry For</th>
            <th className="py-2 px-4 border-b">Attended By</th>
            <th className="py-2 px-4 border-b">Response/Feedback</th>
            <th className="py-2 px-4 border-b">Notifications Sent</th>
          </tr>
        </thead>
        <tbody>
          {followUps.map((followUp) => (
            <tr key={followUp.id}>
              <td className="py-2 px-4 border-b">{followUp.clientName}</td>
              <td className="py-2 px-4 border-b">{followUp.followUpDate}</td>
              <td className="py-2 px-4 border-b">{followUp.followUpTime}</td>
              <td className="py-2 px-4 border-b">{followUp.assessmentDate}</td>
              <td className="py-2 px-4 border-b">{followUp.status}</td>
              <td className="py-2 px-4 border-b">{followUp.convertibility}</td>
              <td className="py-2 px-4 border-b">{followUp.sourceOfInquiry}</td>
              <td className="py-2 px-4 border-b">{followUp.inquiryFor}</td>
              <td className="py-2 px-4 border-b">{followUp.attendedBy}</td>
              <td className="py-2 px-4 border-b">{followUp.responseFeedback}</td>
              <td className="py-2 px-4 border-b">{followUp.sendNotifications ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FollowUp;
