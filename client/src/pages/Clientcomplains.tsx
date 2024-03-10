import ClientSidebar from "../components/Sidebar_client";
import React, { useState, useEffect } from "react";

const Clientcomplains: React.FC = () => {
  const [complaints, setComplaints] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [complainOn, setComplainOn] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/getcomplain", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch complaints");
        } else {
          const data = await response.json();
          setComplaints(data.allComplaints);
        }
      } catch (error) {
        console.error("Error fetching complaints:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/createcomplain", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complainOn, description }),
      });

      if (response.ok) {
        setComplainOn("");
        setDescription("");
        alert("Complaint submitted successfully!");
        window.location.reload();
        const updatedComplaints = await response.json();
        setComplaints(updatedComplaints);
      } else {
        alert("Failed to submit complaint. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard" style={{ width: "100%", height: "100%" }}>
        <div
          className="flex flex-col items-center w-full p-4 shadow-md bg-white"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-4 text-center">
            Register Complaints
          </h2>
          <hr className="w-full my-2 border-t border-gray-300" />
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-3/4">
              <label
                htmlFor="complainOn"
                className="text-sm font-light text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="complainOn"
                value={complainOn}
                onChange={(e) => setComplainOn(e.target.value)}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
              />
            </div>
            <div className="mb-4 w-3/4">
              <label
                htmlFor="description"
                className="block text-sm font-light text-gray-700"
              >
                Description Of the Complaint
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-32 px-2 py-1 border border-gray-400 rounded-md text-lg resize-vertical"
              />
            </div>
            <button
              type="submit"
              className="w-3/4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
            >
              Submit
            </button>
          </form>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-8 text-center">
            Your Complaints
          </h2>
          <hr className="w-full my-2 border-t border-gray-300" />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col w-full items-center">
              {complaints && complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <div key={complaint._id} className="bg-white rounded-lg shadow-md p-4 w-3/4" style={{marginTop:"10px"}}>
                    <div className="font-semibold mb-2">{complaint.complainOn}</div>
                    <div className="text-gray-600 mb-2">{complaint.description}</div>
                    <div className="text-gray-600 mb-2">Date: {new Date(complaint.createdAt).toLocaleDateString()}</div>
                    <div className={`text-gray-600 mb-2 ${complaint.status === "resolved" ||complaint.status==='Resolved' ? "text-green-500" : "text-red-500"}`}>{complaint?.status}</div>
                  </div>
                ))
              ) : (
                <p>No complaints found.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Clientcomplains;
