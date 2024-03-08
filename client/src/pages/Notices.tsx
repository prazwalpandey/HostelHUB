import  { useState,useEffect } from "react";
import AdminSidebar from "../components/Sidebar";

const Notices = () => {
  // State for form inputs
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/getnotice", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch Notices");
        } else {
          const data = await response.json();
          setNotices(data.notices);
        }
      } catch (error) {
        console.error("Error fetching Notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/admin/createnotice", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ noticeOn: title, description }),
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        alert("Notice submitted successfully!");
      
        window.location.reload();
      } else {
        alert("Failed to submit Notice. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting Notice:", error);
    }
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <main
        className="dashboard"
        style={{
          background: "white",
          padding: "20px",
          width: "100%",
          height: "100%",
        }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-4 text-center">
          Publish Notices
        </h2>
        <hr className="w-full my-2 border-t border-gray-300" />

        <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-3/4">
              <label
                htmlFor="noticeOn"
                className="text-sm font-light text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="noticeOn"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                id="noticedescription"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-32 px-2 py-1 border border-gray-400 rounded-md text-lg resize-vertical"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            Notices
          </h2>
          <hr className="w-full my-2 border-t border-gray-300" />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col w-full items-center">
              {notices && notices.length > 0 ? (
                notices.map((notice) => (
                  <div key={notice._id} className="bg-white rounded-lg shadow-md p-4 w-3/4" style={{marginTop:"10px"}}>
                    <div className="font-semibold mb-2">{notice.noticeOn}</div>
                    <div className="text-gray-600 mb-2">{notice.description}</div>
                  </div>
                ))
              ) : (
                <p>No Notices found.</p>
              )}
            </div>
          )}
      </main>
    </div>
  );
};

export default Notices;
