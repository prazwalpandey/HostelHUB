import AdminSidebar from "../components/Sidebar";
import { useState } from "react";
import FileUpload from "../components/FileUpload";

const Studentrecords = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleUploadClick = () => {
    // Logic to handle opening the upload modal
    setIsUploadModalOpen(true);
  };
  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <main
        className="dashboard mb-0"
        style={{ width: "100%", height: "100%" }}
      >
       <div className="profile bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Student Records
          </h2>
          <hr className="border-t border-gray-300 border-width-2" />
          
          {/* Button for uploading CSV file */}
          <FileUpload />
        </div>
      </main>
    </div>
  );
};

export default Studentrecords;
