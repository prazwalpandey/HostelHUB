import  { useState } from 'react';
import {Link} from 'react-router-dom'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminClick = () => {
    setIsAdmin(!isAdmin); // Toggle admin state
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md px-8 py-12 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {isAdmin ? 'Login as Admin' : 'Sign in to your account'}
        </h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 w-24 bg-gray-200 px-4 py-2 rounded-r-md"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 w-28 bg-gray-200 px-4 py-2 rounded-r-md"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 border focus:ring-sky-500 focus:outline-none"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
            <a href="#" className="text-sm ml-auto text-sky-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full bg-sky-500 text-white font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            {isAdmin ? 'Log in' : 'Sign in'}
          </button>
          <button
            type="button"
            onClick={handleAdminClick}
            className={`w-full mt-4 bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${
              isAdmin ? 'w-full mt-4 bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400' : ''
            }`}
          >
            {isAdmin ? 'Login as Client' : 'Login as Admin'}
          </button>
        </form>
        {!isAdmin && (
          <div className="text-center mt-4">
            Don't have an account yet? <Link to="/signup" className="text-sky-500 hover:underline">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
