import React, { useState, FormEvent } from 'react';

interface StudentRecord {
  _id: string;
  name: string;
  email: string;
  contact: string;
  rollNo: string;
  block: string;
  roomNo: string;
  guardianName: string;
  guardianContact: string;
  guardianRelationship: string;
}

interface Props {
  selectedStudent: StudentRecord;
  onClose: () => void;
  onUpdate: (updatedStudent: StudentRecord) => void;
}

const EditForm: React.FC<Props> = ({ selectedStudent, onClose, onUpdate }) => {
  // Define state variables for form fields
  const [name, setName] = useState<string>(selectedStudent.name);
  const [email, setEmail] = useState<string>(selectedStudent.email);
  const [contact, setContact] = useState<string>(selectedStudent.contact);
  const [rollNo, setRollNo] = useState<string>(selectedStudent.rollNo);
  const [block, setBlock] = useState<string>(selectedStudent.block);
  const [roomNo, setRoomNo] = useState<string>(selectedStudent.roomNo);
  const [guardianName, setGuardianName] = useState<string>(selectedStudent.guardianName);
  const [guardianContact, setGuardianContact] = useState<string>(selectedStudent.guardianContact);
  const [guardianRelationship, setGuardianRelationship] = useState<string>(selectedStudent.guardianRelationship);

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedStudent: StudentRecord = {
      ...selectedStudent,
      name,
      email,
      contact,
      rollNo,
      block,
      roomNo,
      guardianName,
      guardianContact,
      guardianRelationship,
    };

    try {
      const response = await fetch(
        `https://prajjwal-bhai-test-be.asaurav.com.np/update/${selectedStudent._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStudent),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      onUpdate(updatedStudent);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="w-full" style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      padding: "20px",
      width: "30%",
      height: "80%",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      alignItems: "center",
      justifyContent: "flex-start",
    }}>
      <h2 className="text-lg font-medium text-center">Edit Student</h2>
      <hr className="w-full my-1 border-t border-gray-300" />
      <form onSubmit={handleSubmit} className="w-full" >
        <div className="flex flex-row " style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="name" className="flex font-semibold w-1/3 text-blue-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="email" className="flex font-semibold w-1/3 text-blue-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="contact" className="flex font-semibold w-1/3 text-blue-500">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="rollNo" className="flex font-semibold w-1/3 text-blue-500">
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="Block" className="flex font-semibold w-1/3 text-blue-500">
            Block
          </label>
          <input
            type="text"
            id="block"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="roomNo" className="flex font-semibold w-1/3 text-blue-500">
            Room No
          </label>
          <input
            type="text"
            id="roomNo"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianName" className="flex font-semibold w-1/3  text-blue-500">
            Guardian
          </label>
          <input
            type="text"
            id="guardianName"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianContact" className="flex font-semibold w-1/3  text-blue-500">
            G.Contact
          </label>
          <input
            type="text"
            id="guardianContact"
            value={guardianContact}
            onChange={(e) => setGuardianContact(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-row" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianRelationship" className="flex font-semibold w-1/3  text-blue-500">
            Relation
          </label>
          <input
            type="text"
            id="guardianRelationship"
            value={guardianRelationship}
            onChange={(e) => setGuardianRelationship(e.target.value)}
            className="w-full px-3 ml-1 border-b rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-blue-500  hover:bg-blue-600 text-white font-semibold  px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold  px-4 rounded focus:outline-none focus:ring focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
