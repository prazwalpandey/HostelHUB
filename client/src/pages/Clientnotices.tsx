import React, { useState, useEffect } from "react";
import ClientSidebar from "../components/Sidebar_client";

interface Notice {
  _id: string;
  noticeOn: string;
  description: string;
  createdAt: string;
}

const ClientNotices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/getallnotice", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch notices");
        } else {
          const data = await response.json();
          setNotices(data.notices);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard bg-white" style={{ width: "100%", height: "100vh" }}>
        <div className=" w-full h-full p-10 ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Notices
          </h2>
          <hr className="w-full my-4 border-t border-gray-300" />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col mt-10">
              {notices.map((notice) => (
                <div key={notice._id} className="bg-white rounded-lg shadow-md p-4 mt-3 mb-3">
                  <div className="font-semibold mb-2">{notice.noticeOn}</div>
                  <div className="text-gray-600 mb-2">{notice.description}</div>
                  <div className="text-sm text-gray-500">Date: {new Date(notice.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientNotices;
