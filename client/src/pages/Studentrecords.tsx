import AdminSidebar from "../components/Sidebar";
import { useState } from "react";

const Studentrecords = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleUploadClick = () => {
    // Logic to handle opening the upload modal
    setIsUploadModalOpen(true);
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main
        className="dashboard mb-0"
        style={{ width: "100%", height: "100%" }}
      >
       <div className="profile bg-white shadow-md rounded-lg ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Student Records
          </h2>
          <hr className="border-t border-gray-300 border-width-2" />
          
          {/* Button for uploading CSV file */}
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUploadClick}
            >
              Add Students
            </button>
          </div>
        </div>
      </main>
      {/* Modal for uploading CSV file */}
      {isUploadModalOpen && (
        {/* Render your modal component here */}
      )}
    </div>
  );
};

export default Studentrecords;
