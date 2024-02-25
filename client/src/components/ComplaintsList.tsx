import React, { useEffect, useState } from 'react';

const ComplaintsList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch user's complaints from server
    const fetchComplaints = async () => {
      try {
        const response = await fetch('/user/complains', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setComplaints(data);
        } else {
          console.error('Failed to fetch complaints');
        }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Your Complaints</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {complaints.map((complaint: any) => (
          <div key={complaint._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="font-semibold mb-2">{complaint.complainOn}</div>
            <div className="text-gray-600 mb-2">{complaint.description}</div>
            <div className={`text-sm ${complaint.status === 'resolved' ? 'text-green-600' : 'text-red-600'}`}>Status: {complaint.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsList;
