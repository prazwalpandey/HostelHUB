import React, { useState, useEffect, FormEvent } from "react";
import ClientSidebar from "../components/Sidebar_client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Changepassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setPasswordMatch(newPassword === retypePassword);
  }, [newPassword, retypePassword]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      currentPassword: currentPassword,
      newPassword: newPassword
    };

    try {
      const response = await fetch("https://prajjwal-bhai-test-be.asaurav.com.np/user/auth/changepassword", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = response;
        console.log("Error", data);
        return data;
      }

      alert("Password changed successfully");
      window.location.href = '/client/dashboard';
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard" style={{ width: "100%", height: "100vh", background: "white" }}>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-4 text-center">
          Change your Password
        </h2>
        <hr className="w-full my-2 border-t border-gray-300" />
        <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
          <div className={'mb-4 w-3/4 relative'}>
            <label htmlFor="CurrentPassword" className="text-sm font-light text-gray-700">
              Current Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="CurrentPassword"
              name="CurrentPassword"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-500"
              style={{ top: "calc(50% + 2px)" }}
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-4 w-3/4 relative" style={{ borderColor: passwordMatch ? '' : 'red' }}>
            <label htmlFor="NewPassword" className="text-sm font-light text-gray-700">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="NewPassword"
              name="NewPassword"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-500"
              style={{ top: "calc(50% + 2px)" }}
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-4 w-3/4 relative" style={{ borderColor: passwordMatch ? '' : 'red' }}>
            <label htmlFor="RetypeNewPassword" className="text-sm font-light text-gray-700">
              Retype New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="RetypeNewPassword"
              name="RetypeNewPassword"
              required
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-2 py-1 border border-gray-400 rounded-md text-lg pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-500"
              style={{ top: "calc(50% + 2px)" }}
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-3/4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
            disabled={!passwordMatch || loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Changepassword;
