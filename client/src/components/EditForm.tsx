import { useState } from "react";
const EditForm = ({ selectedStudent, onClose, onUpdate }) => {
  // Define state variables for form fields
  const [name, setName] = useState(selectedStudent.name);
  const [email, setEmail] = useState(selectedStudent.email);
  const [contact, setContact] = useState(selectedStudent.contact);
  const [rollNo, setRollNo] = useState(selectedStudent.rollNo);
  const [block, setBlock] = useState(selectedStudent.block);
  const [roomNo,setRoomNo]=useState(selectedStudent.roomNo);


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedStudent = { name, email, contact, rollNo, block, roomNo }; 
  
    try {
      const response = await fetch(`http://localhost:5000/update/${selectedStudent._id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to update student');
      }
  
      onUpdate(updatedStudent);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };
  

  return (
    <div className="edit-form w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block mb-2">Contact:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rollNo" className="block mb-2">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Block" className="block mb-2">Block:</label>
          <input
            type="text"
            id="block"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Guardian Name" className="block mb-2">Room No:</label>
          <input
            type="text"
            id="Guardian Name"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
