import AdminSidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import FileUpload from "../components/FileUpload";

interface StudentRecord {
  name: string;
  email: string;
  contact: string;
  rollNo: string;
  block: string;
  roomNo: string;
}

const Studentrecords: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [studentRecords, setStudentRecords] = useState<{ [key: string]: StudentRecord }>({});
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleStudentClick=(record)=>{
    setSelectedStudent(record);
    setShowDropdown(true);

  }

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setShowDropdown(false);
  };
  const handleEdit=(record)=>{
    
  }
  const handleDelete=(record)=>{

  }
  useEffect(() => {
    const fetchStudentRecords = async () => {
      try {
        const response = await fetch("http://localhost:5000/getstudents", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch student records");
        }
        const data = await response.json();
        setStudentRecords(data.students);
      } catch (error) {
        console.error("Error fetching student records:", error);
        setStudentRecords({});
      }
    };

    fetchStudentRecords();
  }, []);

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <div className="mainpage flex flex-col" style={{ alignItems: "flex-start" }}>
        <main className="dashboard mb-3" style={{ width: "100%", height: "auto" }}>
          <div className="profile" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">Add Student Records</h2>
            <hr className="border-t border-gray-300 border-width-2" />
            <br />
            <div className="add data flex flex-row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <p>Click on "Select File" and Upload a csv, xlsx or xls to add student records.</p>
              {/* Button for uploading CSV file */}
              <FileUpload />
            </div>
          </div>
        </main>
        <div className="profile w-full" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">Student Records</h2>
          <hr className="border-t border-gray-300 border-width-2" />
          <br />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Contact</th>
                  <th className="border border-gray-300 px-4 py-2">Roll No</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(studentRecords).map((record, index) => (
                  <tr key={index} >
                    <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={()=>handleStudentClick(record)} >{record.name}</td>
                    <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={()=>handleStudentClick(record)}>{record.email}</td>
                    <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={()=>handleStudentClick(record)}>{record.contact}</td>
                    <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={()=>handleStudentClick(record)}>{record.rollNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showDropdown && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedStudent.name}</h2>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Contact:</strong> {selectedStudent.contact}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
            <p><strong>Block:</strong> {selectedStudent.block}</p>
            <p><strong>Room No:</strong> {selectedStudent.roomNo}</p>
            <p><strong>Guardian Name:</strong> {selectedStudent.guardianName}</p>
            <p><strong>Guardian Contact:</strong> {selectedStudent.guardianContact}</p>
            <p><strong>Guardian Relationship:</strong> {selectedStudent.guardianRelationship}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Studentrecords;