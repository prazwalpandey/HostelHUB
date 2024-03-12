import { useState, useEffect } from "react";
import "../styles/profile.scss";
import ClientSidebar from "./Sidebar_client";

interface ProfileData {
  name: string;
  email: string;
  contact: string;
  department: string;
  rollNo: string;
  roomNo: string;
  block: string;
  guardianName: string;
  guardianContact: string;
  guardianRelationship: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://prajjwal-bhai-test-be.asaurav.com.np/getme", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        const data: ProfileData = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error Fetching user details:', error);
      }
    };
    fetchData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard" style={{ width: "100%", height: "100%" }}>
        <div className="profile bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Student's Profile
          </h2>
          <hr className="border-t border-gray-300 border-width-2" />
          <ul className="list-disc m-0">
            {/* Render user profile data */}
            <li>
              <span className="font-medium">Name:</span>
              <span className="text-gray-700 ml-2">{profile.name}</span>
            </li>
            <li>
              <span className="font-medium">Email:</span>
              <span className="text-gray-700 ml-2">{profile.email}</span>
            </li>
            <li>
              <span className="font-medium">Contact:</span>
              <span className="text-gray-700 ml-2">{profile.contact}</span>
            </li>
            <li>
              <span className="font-medium">Department:</span>
              <span className="text-gray-700 ml-2">{profile.department}</span>
            </li>
            <li>
              <span className="font-medium">Roll No:</span>
              <span className="text-gray-700 ml-2">{profile.rollNo}</span>
            </li>
            <li>
              <span className="font-medium">Block:</span>
              <span className="text-gray-700 ml-2">{profile.block}</span>
            </li>
            <li>
              <span className="font-medium">Room No:</span>
              <span className="text-gray-700 ml-2">{profile.roomNo}</span>
            </li>
            <li>
              <span className="font-medium">Guardian Name:</span>
              <span className="text-gray-700 ml-2">{profile.guardianName}</span>
            </li>
            <li>
              <span className="font-medium">Guardian Number:</span>
              <span className="text-gray-700 ml-2">{profile.guardianContact}</span>
            </li>
            <li>
              <span className="font-medium">Guardian Relationship:</span>
              <span className="text-gray-700 ml-2">{profile.guardianRelationship}</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Profile;
