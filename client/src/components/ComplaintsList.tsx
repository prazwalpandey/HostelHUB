import React, { useEffect, useState } from 'react';

interface Complaint {
  _id: number;
  complainOn: string;
  description: string;
  createdAt:string;
  status: 'Resolved' | 'Pending'; // Assuming status can only be 'resolved' or 'pending'
}

const ComplaintsList: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    // Fetch user's complaints from server
    const fetchComplaints = async () => {
      try {
        const response = await fetch('https://prajjwal-bhai-test-be.asaurav.com.np/admin/getallcomplain', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          console.error('Failed to fetch complaints');
        } else {
          const data = await response.json();
          setComplaints(data.complains);
        }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  const handleResolveComplaint = async (complaintId: number) => {
    try {
      const response = await fetch(`https://prajjwal-bhai-test-be.asaurav.com.np/admin/resolvecomplaint/${complaintId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Failed to resolve complaint');
      } else {
        // Update the state to reflect the resolved complaint
        setComplaints(prevComplaints =>
          prevComplaints.map(complaint =>
            complaint._id === complaintId ? { ...complaint, status: 'Resolved' } : complaint
          )
        );
      }
    } catch (error) {
      console.error('Error resolving complaint:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Complaint List</h2>
      <hr className="mb-4 border-t border-gray-300 border-width-2" />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {complaints.map(complaint => (
          <div key={complaint._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="font-semibold mb-2">{complaint.complainOn}</div>
            <div className="text-gray-600 mb-2">{complaint.description}</div>
            {/* Add createdAt field to Complaint interface */}
            <div className="text-gray-600 mb-2">Date: {new Date(complaint.createdAt).toLocaleDateString()}</div>
            <div className={`text-sm ${complaint.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {complaint.status}
            </div>
            {complaint.status !== 'Resolved' && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => handleResolveComplaint(complaint._id)}
              >
                Mark as Resolved
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsList;
