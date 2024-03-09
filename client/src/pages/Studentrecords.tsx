import AdminSidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import FileUpload from "../components/FileUpload";
import EditForm from "../components/EditForm";

interface StudentRecord {
  name: string;
  email: string;
  contact: string;
  rollNo: string;
  block: string;
  roomNo: string;
  year: string; // Add year property
}

const Studentrecords: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [studentRecords, setStudentRecords] = useState<StudentRecord[]>([]); // Change type to array of StudentRecord
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(
    null
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchByYear, setSearchByYear] = useState<string>("");
  const [searchByName,setSearchByName]=useState<string>("");
  const [byYear,setByYear]=useState<boolean>(false);

  const handleStudentClick = (record: StudentRecord) => {
    setSelectedStudent(record);
    setShowDropdown(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setShowDropdown(false);
  };

  const handleEdit = (selectedStudent: StudentRecord) => {
    setSelectedStudent(selectedStudent);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (updatedStudent: StudentRecord) => {
    // Implement update logic here
    setIsEditModalOpen(false);
  };

  const handleDelete = async (selectedStudent: StudentRecord) => {
    try {
      const userId = selectedStudent._id;
      const userName = selectedStudent.name;
      const response = await fetch(
        `http://localhost:5000/deleteuser/${userId}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        alert("Failed to delete user");
        throw new Error("Failed to delete user");
      }
      alert(`${userName} deleted successfully`);
      handleCloseModal();
      console.log("User deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchStudentRecords = async () => {
      try {
        const response = await fetch("http://localhost:5000/getstudents", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch student records");
        }
        const data = await response.json();
        setStudentRecords(data.students);
      } catch (error) {
        console.error("Error fetching student records:", error);
        setStudentRecords([]);
      }
    };

    fetchStudentRecords();
  }, []);

  const filteredStudentRecords = studentRecords.filter((record) => {
    const searchYear = parseInt(searchByYear);
    return isNaN(searchYear) || record.year === searchYear;
  });

  const filterByName = studentRecords.filter((record) => {
    return record.name.toLowerCase().startsWith(searchByName.toLowerCase());
  });
  

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <main
          className="dashboard w-full h-full"
          style={{ background: "white" }}
        >
          <div
            className="profile"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding:"5%",
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
              Add Student Records
            </h2>
            <hr className="border-t border-gray-300 border-width-2" />
            <br />
            <div
              className="add data flex flex-row"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <p>
                Click on "Select File" and Upload a csv, xlsx or xls to add
                student records.
              </p>
              <FileUpload />
            </div>
          
          <br />
          <br />
          <div
            className="profile w-full"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
              Student Records
            </h2>
            <hr className="border-t border-gray-300 border-width-2" />
            <br />
            <div className="search-by-year" style={{display:"flex",marginBottom: "20px" , justifyContent:"space-evenly"}}>

              {/* Search By Year  */}
              <input
                type="text"
                placeholder="Search By Year"
                value={searchByYear}
                onChange={(e) => {
                  setSearchByYear(e.target.value);
                  setByYear(true);
                }}
                className="border border-gray-300 px-4 py-2 rounded-lg"
              />

              {/* Search By Name */}
              <input
                type="text"
                placeholder="Search By Name"
                value={searchByName}
                onChange={(e) => {
                  setSearchByName(e.target.value)
                  setByYear(false);
                }}
                className="border border-gray-300 px-4 py-2 rounded-lg"
              />



            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Contact
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Roll No
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {byYear? filteredStudentRecords.map((record,index) => (
                    <tr key={index}>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.name}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.email}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.contact}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.rollNo}
                      </td>
                    </tr>

                  )):
                  filterByName.map((record, index) => (
                    <tr key={index}>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.name}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.email}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.contact}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 cursor-pointer"
                        onClick={() => handleStudentClick(record)}
                      >
                        {record.rollNo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {showDropdown && selectedStudent && (
            <div
              className="modal-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="modal-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  padding: "20px",
                  width: "30%",
                  height: "80%",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedStudent.name}
                </h2>
                <div className="Data">
                  <p>
                    <strong>Email:</strong> {selectedStudent.email}
                  </p>
                  <p>
                    <strong>Contact:</strong> {selectedStudent.contact}
                  </p>
                  <p>
                    <strong>Roll No:</strong> {selectedStudent.rollNo}
                  </p>
                  <p>
                    <strong>Block:</strong> {selectedStudent.block}
                  </p>
                  <p>
                    <strong>Room No:</strong> {selectedStudent.roomNo}
                  </p>
                  <p>
                    <strong>Year:</strong> {selectedStudent.year}
                  </p>
                  <p>
                    <strong>Batch:</strong> {selectedStudent.batch}
                  </p>
                  <p>
                    <strong>Guardian Name:</strong>{" "}
                    {selectedStudent.guardianName}
                  </p>
                  <p>
                    <strong>Guardian Contact:</strong>{" "}
                    {selectedStudent.guardianContact}
                  </p>
                  <p>
                    <strong>Guardian Relationship:</strong>{" "}
                    {selectedStudent.guardianRelationship}
                  </p>
                </div>
                <div
                  className="buttons"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleDelete(selectedStudent)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                    onClick={() => handleEdit(selectedStudent)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {isEditModalOpen && (
            <div
            className="modal-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                <EditForm
                  selectedStudent={selectedStudent}
                  onClose={() => setIsEditModalOpen(false)}
                  onUpdate={handleUpdate}
                />
            </div>
          )}
          </div>
      </main>
    </div>
  );
};

export default Studentrecords;
