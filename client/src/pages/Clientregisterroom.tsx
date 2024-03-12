import React, { useState, useEffect, FormEvent } from 'react';
import Select from 'react-select';
import ClientSidebar from "../components/Sidebar_client";

interface Student {
  rollNo: string;
}

interface OptionType {
  value: string;
  label: string;
}

const Clientregisterroom: React.FC = () => {
  const [student1RollNo, setStudent1RollNo] = useState<string>("");
  const [student2RollNo, setStudent2RollNo] = useState<string>("");
  const [student3RollNo, setStudent3RollNo] = useState<string>("");
  const [rollNoOptions, setRollNoOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://prajjwal-bhai-test-be.asaurav.com.np/getstudents', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Error fetching student roll numbers');
        }

        const data: { students: Student[]; } = await response.json();
        const options = data.students.map(student => ({ value: student.rollNo, label: student.rollNo }));
        setRollNoOptions(options);
      } catch (error) {
        console.error('Error fetching student roll numbers:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      student1RollNo,
      student2RollNo,
      student3RollNo
    };

    try {
      const response = await fetch('https://prajjwal-bhai-test-be.asaurav.com.np/registerforroom', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error registering for room');
      }

      console.log('Room registration successful');
      alert('Room registration Successful !');
      window.location.reload();
    } catch (error) {
      console.error('Error registering for room:', error);
    }
  };

  const handleSelectChange = (selectedOption: OptionType | null, setRollNo: (rollNo: string) => void) => {
    if (selectedOption) {
      setRollNo(selectedOption.value);
    } else {
      setRollNo("");
    }
  };
  

  const filteredOptions1 = rollNoOptions.filter(option => option.value !== student2RollNo && option.value !== student3RollNo);
  const filteredOptions2 = rollNoOptions.filter(option => option.value !== student1RollNo && option.value !== student3RollNo);
  const filteredOptions3 = rollNoOptions.filter(option => option.value !== student1RollNo && option.value !== student2RollNo);

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <ClientSidebar />
      <main className="dashboard" style={{ width: "100%", height: "100%" }}>
        <div className="flex flex-col w-full p-4 shadow-md bg-white items-center h-full" style={{ width: "auto", height: "100%", padding: "30px" }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Register For Room Allocation
          </h2>
          <hr className="w-full my-4 border-t border-gray-300" />
          <p className="reminder text-center mb-4" style={{ color: "#333", fontSize: "0.875rem" }}>
            Reminder: Only one form should be submitted by any one of the members.
          </p>
          <form
            className="w-full text-center"
            style={{ width: "100%", display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <label htmlFor="name1" className="text-sm font-light mb-2 ">
                Student 1
              </label>
              <Select
                id="name1"
                className="input-style w-1/3"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minWidth: "50%",
                    justifyContent: "center",
                    padding: "0.1rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    outline: "none",
                  }),
                }}
                value={rollNoOptions.find((option) => option.value === student1RollNo)}
                onChange={(selectedOption) => handleSelectChange(selectedOption as OptionType | null, setStudent1RollNo)}
                options={filteredOptions1}
              />
            </div>
            <br />
            <div className="mb-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <label htmlFor="name2" className="text-sm font-light mb-2">
                Student 2
              </label>
              <Select
                id="name2"
                className="input-style w-1/3"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minWidth: "50%",
                    justifyContent: "center",
                    padding: "0.1rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    outline: "none",
                  }),
                }}
                value={rollNoOptions.find((option) => option.value === student2RollNo)}
                onChange={(selectedOption) => handleSelectChange(selectedOption as OptionType | null, setStudent2RollNo)}
                options={filteredOptions2}
              />
            </div>
            <br />
            <div className="mb-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <label htmlFor="name3" className="text-sm font-light mb-2">
                Student 3
              </label>
              <Select
                id="name3"
                className="input-style w-1/3"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minWidth: "50%",
                    justifyContent: "center",
                    padding: "0.1rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    outline: "none",
                  }),
                }}
                value={rollNoOptions.find((option) => option.value === student3RollNo)}
                onChange={(selectedOption) => handleSelectChange(selectedOption as OptionType | null, setStudent3RollNo)}
                options={filteredOptions3}
              />
            </div>
            <br />
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-1 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Clientregisterroom;
