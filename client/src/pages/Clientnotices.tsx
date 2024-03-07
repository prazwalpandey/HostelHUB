import ClientSidebar from "../components/Sidebar_client";
import { useState, useEffect } from "react";

const ClientNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <main className="dashboard" style={{ width: "100%", height: "100vh" }}>
        <div
          className="flex flex-col w-full p-4 shadow-md bg-white items-center  h-full"
          style={{ width: "auto", height: "100%", padding: "30px" }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Notices
          </h2>
          <hr className="w-full my-4 border-t border-gray-300" />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {notices.map((notice) => (
                <div key={notice._id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="font-semibold mb-2">{notice.title}</div>
                  <div className="text-gray-600 mb-2">{notice.description}</div>
                  <div className="text-sm text-gray-500">Date: {notice.createdAt}</div>
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
