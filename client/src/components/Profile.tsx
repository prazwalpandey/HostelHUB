import { useState } from "react";
import "../styles/profile.scss";
import ClientSidebar from "./Sidebar_client";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Prazwal Stark",
    email: "prazwalstark@gmail.com",
    contact: "9867824200",
    block: "A",
    roomNo: "204",
    semester: "6",
    rollno: "PUL077BCT055",
    department: "Computer",
    guardianName: "Tony Stark",
    guardianContact: "9810101010",
    guardianRelationship: "GodFather",
  });
  return (
    <>
      <div className="adminContainer">
        <ClientSidebar />;
        <div className="profile bg-white shadow-md rounded-lg ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Student's Profile
          </h2>
          <ul className="list-disc m-0">
            <li>
              <span className="font-small">Name:</span>
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
              <span className="font-medium">Block:</span>
              <span className="text-gray-700 ml-2">{profile.block}</span>
            </li>
            <li>
              <span className="font-medium">Room No:</span>
              <span className="text-gray-700 ml-2">{profile.roomNo}</span>
            </li>
            <li>
              <span className="font-medium">Roll No:</span>
              <span className="text-gray-700 ml-2">{profile.rollno}</span>
            </li>
            <li>
              <span className="font-medium">Department:</span>
              <span className="text-gray-700 ml-2">{profile.department}</span>
            </li>
            <li>
              <span className="font-medium">Semester:</span>
              <span className="text-gray-700 ml-2">{profile.semester}</span>
            </li>
            <li>
              <span className="font-medium">Guardian Name:</span>
              <span className="text-gray-700 ml-2">{profile.guardianName}</span>
            </li>
            <li>
              <span className="font-medium">Guardian Contact:</span>
              <span className="text-gray-700 ml-2">
                {profile.guardianContact}
              </span>
            </li>
            <li>
              <span className="font-medium">Guardian Relationship:</span>
              <span className="text-gray-700 ml-2">
                {profile.guardianRelationship}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;