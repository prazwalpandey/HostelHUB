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
  <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
    <ClientSidebar />
    <main className="dashboard" style={{ width: "100%", height: "100%"}}>
      <div
        className="flex flex-col w-full p-4 rounded-lg shadow-md bg-white items-center justify-center h-full"
        style={{width: "auto", height: "100%", padding:"30px" }}
      >
    <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">Register For Room Allocation</h2>
    <hr className="w-full my-4 border-t border-gray-300" />
        <p
          className="reminder text-center mb-4"
          style={{ color: "#333", fontSize: "0.875rem" }}
        >
          Reminder: Only one form should be submitted by any one of the members.
        </p>
        <div className="flex justify-center">
      <form className="w-full text-center" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name1" className="text-sm font-medium mb-2 ">
            Student 1
          </label>
          <br />
          <select
            id="name1"
            className="input-style"
            style={{
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

        <div className="mb-6">
          <label htmlFor="name2" className="text-sm font-medium mb-2">
            Student 2
          </label>
          <br />
          <select
            id="name2"
            className="input-style"
            style={{
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

        <div className="mb-6">
          <label htmlFor="name3" className="text-sm font-medium mb-2">
            Student 3
          </label>
          <br />
          <select
            id="name3"
            className="input-style"
            style={{
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

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-1 rounded"
        >
          Submit
        </button>
      </form>
    </div>





        {/* <label htmlFor="name1" className="text-sm font-medium mb-2">
          Student 1
        </label>
        <input
          id="name1"
          type="text"
          placeholder="Roll NO. eg, PUL077BCT055"
          className="input-style"
          style={{
            width: "30%",
            marginBottom: "10px",
            padding: "0.1rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
        />
        <label htmlFor="name2" className="text-sm font-medium mb-2">
          Student 2
        </label>
        <input
          id="name2"
          type="text"
          placeholder="Roll NO. eg, PUL077BCT056"
          className="input-style"
          style={{
            width: "30%",
            marginBottom: "10px",
            padding: "0.1rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
        />
        <label htmlFor="name3" className="text-sm font-medium mb-2">
          Student 3
        </label>
        <input
          id="name3"
          type="text"
          placeholder="Roll NO. eg, PUL077BCT057"
          className="input-style"
          style={{
            width: "30%",
            marginBottom: "10px",
            padding: "0.1rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
        />
        <button
            type="button"
            className="bg-sky-500 text-white font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          style={{width:"30%"}}>
            Submit
          </button> */}
      </div>
    </main>
  </div>
</>
  );
};

export default Clientregisterroom;
