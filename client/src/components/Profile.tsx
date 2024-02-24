import { useState } from 'react';
import '../styles/profile.scss';
import ClientSidebar from './Sidebar_client';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Prazwal',
    email: 'prazwalstark@gmail.com',
    contact: '9867824200',
    block: 'A',
    roomNo: '4',
    floorNo: '2',
    guardianName: 'Tony Stark',
    guardianContact: '9810101010',
    guardianRelationship: 'GodFather'
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // You can add logic here to save the edited profile information
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <>
      <div className="adminContainer">
        <ClientSidebar />
        <div className="profile">
          <h2>Profile Information</h2>
          {editing ? (
            <div className='data'>
              <label>
                Name:
                <input type="text" name="name" value={profile.name} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={profile.email} onChange={handleChange} />
              </label>
              <label>
                Contact:
                <input type="text" name="contact" value={profile.contact} onChange={handleChange} />
              </label>
              <label>
                Block:
                <input type="text" name="block" value={profile.block} onChange={handleChange} />
              </label>
              <label>
                Room No:
                <input type="text" name="roomNo" value={profile.roomNo} onChange={handleChange} />
              </label>
              <label>
                Floor No:
                <input type="text" name="floorNo" value={profile.floorNo} onChange={handleChange} />
              </label>
              <label>
                Guardian Name:
                <input type="text" name="guardianName" value={profile.guardianName} onChange={handleChange} />
              </label>
              <label>
                Guardian Contact:
                <input type="text" name="guardianContact" value={profile.guardianContact} onChange={handleChange} />
              </label>
              <label>
                Guardian Relationship:
                <input type="text" name="guardianRelationship" value={profile.guardianRelationship} onChange={handleChange} />
              </label>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div className='data'>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Contact: {profile.contact}</p>
              <p>Block: {profile.block}</p>
              <p>Room No: {profile.roomNo}</p>
              <p>Floor No: {profile.floorNo}</p>
              <p>Guardian Name: {profile.guardianName}</p>
              <p>Guardian Contact: {profile.guardianContact}</p>
              <p>Guardian Relationship: {profile.guardianRelationship}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
