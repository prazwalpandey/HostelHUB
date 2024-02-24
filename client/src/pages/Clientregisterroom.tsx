import ClientSidebar from "../components/Sidebar_client";

const Clientregisterroom = () => {
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
    <hr className="border-t border-gray-300 border-width-2" />
        <p
          className="reminder text-center mb-4"
          style={{ color: "#333", fontSize: "0.875rem" }}
        >
          Reminder: Only one form should be submitted by any one of the members.
        </p>
        <label htmlFor="name1" className="text-sm font-medium mb-2">
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
          </button>
      </div>
    </main>
  </div>
</>
  );
};

export default Clientregisterroom;
