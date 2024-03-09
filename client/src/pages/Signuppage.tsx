import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/signup.css";

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    rollNo: "",
    roomNo: "",
    block:"",
    floorNo: "",
    department: "",
    batch: "",
    guardianName: "",
    guardianContact: "",
    guardianRelationship: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [registering, setRegistering] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegistering(true);
    try {
      const response = await fetch("http://localhost:5000/user/auth/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(!response.ok)
      {
        const data = await response.json();
        console.log(data);
        return data;
      }
      alert("Registered successfully");
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className="my flex flex-col bg-white px-10 py-10 m-10 "
        style={{ width: "90vw", height: "90vh", margin: "5vw 5vh", overflowY: "auto" }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">REGISTER</h2>
        <hr className="w-full my-1 border-t border-gray-300" />
        <form onSubmit={handleSubmit} className="w-full mt-5">
          {/* Input fields */}
          {/* Full Name */}
          <div className="grid grid-cols-4" style={{ alignItems: "center", margin: "10px" }}>
            <label htmlFor="name" className="font-medium text-blue-500">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="email" className="font-medium text-blue-500">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{ alignItems: "center", margin: "10px" }}>
            <label htmlFor="password" className="font-medium text-blue-500">
              Password:
            </label>
            <div className="relative col-span-2 w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="px-3 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-500"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="contact" className="font-medium text-blue-500">
            Contact Number:
          </label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="rollNo" className="font-medium text-blue-500">
            Roll No:
          </label>
          <input
            type="text"
            id="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="roomNo" className="font-medium text-blue-500">
            Room No:
          </label>
          <input
            type="text"
            id="roomNo"
            onChange={handleChange}
            value={formData.roomNo}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="block" className="font-medium text-blue-500">
            Block:
          </label>
          <input
            type="text"
            id="block"
            onChange={handleChange}
            value={formData.block}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="Floor" className="font-medium text-blue-500">
            Floor No:
          </label>
          <input
            type="text"
            id="floorNo"
            onChange={handleChange}
            value={formData.floorNo}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="Department" className="font-medium text-blue-500">
            Department:
          </label>
          <input
            type="text"
            id="department"
            onChange={handleChange}
            value={formData.department}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="batch" className="font-medium text-blue-500">
            Batch:
          </label>
          <input
            type="text"
            id="batch"
            onChange={handleChange}
            value={formData.batch}
            required
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianName" className="font-medium text-blue-500">
            Guardian Name:
          </label>
          <input
            type="text"
            id="guardianName"
            onChange={handleChange}
            value={formData.guardianName}
            required
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianContact" className="font-medium text-blue-500">
            Guardian Contact:
          </label>
          <input
            type="text"
            id="guardianContact"
            onChange={handleChange}
            required
            value={formData.guardianContact}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianRelationship" className="font-medium text-blue-500">
            Relation with Guardian:
          </label>
          <input
            type="text"
            id="guardianRelationship"
            onChange={handleChange}
            required
            value={formData.guardianRelationship}
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

          {/* Submit Button */}
          <div className="w-full flex flex-col mt-10">
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/5 mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
                disabled={registering}
              >
                {registering ? "Registering..." : "Register"}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-1/5 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 rounded focus:outline-none focus:ring focus:ring-gray-400"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
