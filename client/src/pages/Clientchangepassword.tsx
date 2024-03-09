import ClientSidebar from "../components/Sidebar_client";

const Clientchangepassword = () => {
  const handleSubmit=()=>{};
  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main
        className="dashboard"
        style={{ width: "100%", height: "100vh",background:"white"}}>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-4 text-center">
          Change your Password
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
                Current Password
              </label>
              <input
                type="text"
                id="noticeOn"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
              />
            </div>
            <div className="mb-4 w-3/4">
              <label
                htmlFor="noticeOn"
                className="text-sm font-light text-gray-700"
              >
                New Password
              </label>
              <input
                type="text"
                id="noticeOn"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
              />
            </div>
            <div className="mb-4 w-3/4">
              <label
                htmlFor="noticeOn"
                className="text-sm font-light text-gray-700"
              >
                Retype New Password
              </label>
              <input
                type="text"
                id="noticeOn"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-3/4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
            >
              Submit
            </button>
          </form>
      </main>
    </div>
  );
};
export default Clientchangepassword;
