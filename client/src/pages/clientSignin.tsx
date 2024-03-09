import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading state

  const handleAdminClick = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when the form is submitted
    try {
      const loginUrl = isAdmin
        ? "http://localhost:5000/admin/auth/login"
        : "http://localhost:5000/user/auth/login";

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorMessage =
          response.status === 401 ? "Unauthorized" : "Login failed";
        throw new Error(errorMessage);
      }
      const data = await response.json();
      document.cookie = `token=${data.token}`;
      const dashboardUrl = isAdmin ? "/admin/dashboard" : "/client/dashboard";
      window.location.href = dashboardUrl;
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md px-8 py-12 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          {isAdmin ? "Login as Admin" : "Student Login"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className=" relative ">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 pr-10 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="Enter Password"
              required
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}{" "}
            {/* Change button text based on loading state */}
          </button>
          <button
            type="button"
            onClick={handleAdminClick}
            className={`w-full mt-4 bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${
              isAdmin
                ? "w-full mt-4 bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                : ""
            }`}
          >
            {isAdmin ? "Login as Client" : "Login as Admin"}
          </button>
          {!isAdmin && (
            <button
              type="button"
              // onClick={}
              className={`w-full mt-4 bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`}
              onClick={() => { window.location.href="/SignUp"; }}
            >
              SignUp
            </button>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
