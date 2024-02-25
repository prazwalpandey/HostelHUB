import ClientSidebar from "../components/Sidebar_client";
import React, { useState } from "react";

const Clientcomplains = () => {
  const [complainOn, setComplainOn] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send complaint data to server
      const response = await fetch("/user/complains", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ complainOn, description }),
      });

      if (response.ok) {
        // Clear form fields
        setComplainOn("");
        setDescription("");
        // Show success message
        alert("Complaint submitted successfully!");
      } else {
        // Handle error
        alert("Failed to submit complaint. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard" style={{ width: "100%", height: "100vh" }}>
        <div
          className="flex flex-col w-full p-4 rounded-lg shadow-md bg-white items-center  h-full"
          style={{ width: "auto", height: "100%", padding: "30px" }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Register Complains
          </h2>
          <hr className="w-full my-4 border-t border-gray-300" />
            <form
              className="w-full"
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display:"flex",
                justifyItems: "center",
                alignItems: "center",
                flexDirection:"column"
              }}  
            >
              <div className="mb-2" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
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
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  style={{
                    width:"50%",
                    justifyContent:"center",
                    padding: "0.1rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mb-4" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <label
                  htmlFor="description"
                  className="block text-sm font-light text-gray-700"
                >
                  Description Of the Complain
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  style={{
                    width:"50%",
                    height: "40%",
                    padding: "0.1rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    outline: "none",
                    minHeight: "200px",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-1/2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
      </main>
    </div>
  );
};

export default Clientcomplains;
