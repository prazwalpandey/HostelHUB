import React, { useState } from "react";
import AdminSidebar from "../components/Sidebar";

const Notices = () => {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action

    // Here, you would typically send the title and description to your backend or wherever you're handling the notices
    console.log("Submitting", { title, description });

    // Optionally, clear the form fields after submission
    setTitle("");
    setDescription("");
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
                htmlFor="complainOn"
                className="text-sm font-light text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="noticetitle"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
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
      </main>
    </div>
  );
};

export default Notices;
