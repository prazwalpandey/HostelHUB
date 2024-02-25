import ClientSidebar from "../components/Sidebar_client";
import React, { useState } from "react";

const Clientregisterroom = () => {
  const [student1RollNo, setStudent1RollNo] = useState("");
  const [student2RollNo, setStudent2RollNo] = useState("");
  const [student3RollNo, setStudent3RollNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with selected roll numbers
    console.log("Student 1 Roll No:", student1RollNo);
    console.log("Student 2 Roll No:", student2RollNo);
    console.log("Student 3 Roll No:", student3RollNo);
    // Reset selected roll numbers
    setStudent1RollNo("");
    setStudent2RollNo("");
    setStudent3RollNo("");
  };
  const rollNoOptions = [
    { value: "", label: "Select Roll No." },
    { value: "PUL077BCT055", label: "PUL077BCT055" },
    { value: "PUL077BCT067", label: "PUL077BCT067" },
    { value: "PUL077BCT100", label: "PUL077BCT100" },
    // fetch from database
  ];
  return (
    <>
      <div
        className="adminContainer"
        style={{ width: "100vw", height: "100vh" }}
      >
        <ClientSidebar />
        <main className="dashboard" style={{ width: "100%", height: "100%" }}>
          <div
            className="flex flex-col w-full p-4 rounded-lg shadow-md bg-white items-center h-full"
            style={{ width: "auto", height: "100%", padding: "30px" }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
              Register For Room Allocation
            </h2>
            <hr className="w-full my-4 border-t border-gray-300" />
            <p
              className="reminder text-center mb-4"
              style={{ color: "#333", fontSize: "0.875rem" }}
            >
              Reminder: Only one form should be submitted by any one of the
              members.
            </p>
              <form
                className="w-full text-center"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onSubmit={handleSubmit}
              >
                <div
                  className="mb-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <label htmlFor="name1" className="text-sm font-light mb-2 ">
                    Student 1
                  </label>
                  <select
                    id="name1"
                    className="input-style"
                    style={{
                      width: "50%",
                      justifyContent: "center",
                      padding: "0.1rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.25rem",
                      outline: "none",
                    }}
                    value={student1RollNo}
                    onChange={(e) => setStudent1RollNo(e.target.value)}
                  >
                    {rollNoOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                      <br />
                <div className="mb-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                >
                  <label htmlFor="name2" className="text-sm font-light mb-2">
                    Student 2
                  </label>
    
                  <select
                    id="name2"
                    className="input-style"
                    style={{
                      width: "50%",
                      justifyContent: "center",
                      padding: "0.1rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.25rem",
                      outline: "none",
                    }}
                    value={student2RollNo}
                    onChange={(e) => setStudent2RollNo(e.target.value)}
                  >
                    {rollNoOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
<br />
                <div className="mb-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                >
                  <label htmlFor="name3" className="text-sm font-light mb-2">
                    Student 3
                  </label>
          
                  <select
                    id="name3"
                    className="input-style"
                    style={{
                      width: "50%",
                      justifyContent: "center",
                      padding: "0.1rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.25rem",
                      outline: "none",
                    }}
                    value={student3RollNo}
                    onChange={(e) => setStudent3RollNo(e.target.value)}
                  >
                    {rollNoOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
<br />
                <button
                  type="submit"
                  className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-1 rounded"
                >
                  Submit
                </button>
              </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Clientregisterroom;
