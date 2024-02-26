import AdminSidebar from "../components/Sidebar";
import { useState } from "react";

const Roomallocation = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedRooms((prevSelectedRooms) => [...prevSelectedRooms, id]);
    } else {
      setSelectedRooms((prevSelectedRooms) =>
        prevSelectedRooms.filter((room) => room !== id)
      );
    }
  };

  const handleSubmit = () => {
    // Handle submitting the selected rooms
    console.log("Selected Rooms:", selectedRooms);
  };

  // Generate room names for each block
  const roomNames = [
    "A101",
    "A102",
    "A103",
    "A104",
    "A105",
    "A106",
    "A107",
    "A108",
    "A109",
    "A110",
    "A111",
    "A112",
    "A113",
    "A114",
    "A115",
    "A116",
    "A117",
    "A118",
    "A119",
    "A201",
    "A202",
    "A203",
    "A204",
    "A205",
    "A206",
    "A207",
    "A208",
    "A209",
    "A210",
    "A211",
    "A212",
    "A213",
    "A214",
    "A215",
    "A216",
    "A217",
    "A218",
    "A219",
    "A301",
    "A302",
    "A303",
    "A304",
    "A305",
    "A306",
    "A307",
    "A308",
    "A309",
    "A310",
    "A311",
    "A312",
    "A313",
    "A314",
    "A315",
    "A316",
    "A317",
    "A318",
    "A319",
    "B101",
    "B102",
    "B103",
    "B104",
    "B105",
    "B106",
    "B107",
    "B108",
    "B109",
    "B110",
    "B111",
    "B112",
    "B113",
    "B114",
    "B115",
    "B116",
    "B117",
    "B118",
    "B119",
    "B201",
    "B202",
    "B203",
    "B204",
    "B205",
    "B206",
    "B207",
    "B208",
    "B209",
    "B210",
    "B211",
    "B212",
    "B213",
    "B214",
    "B215",
    "B216",
    "B217",
    "B218",
    "B219",
    "B301",
    "B302",
    "B303",
    "B304",
    "B305",
    "B306",
    "B307",
    "B308",
    "B309",
    "B310",
    "B311",
    "B312",
    "B313",
    "B314",
    "B315",
    "B316",
    "B317",
    "B318",
    "B319",
    "C101",
    "C102",
    "C103",
    "C104",
    "C105",
    "C106",
    "C107",
    "C108",
    "C109",
    "C110",
    "C111",
    "C112",
    "C113",
    "C114",
    "C115",
    "C116",
    "C117",
    "C118",
    "C119",
    "C201",
    "C202",
    "C203",
    "C204",
    "C205",
    "C206",
    "C207",
    "C208",
    "C209",
    "C210",
    "C211",
    "C212",
    "C213",
    "C214",
    "C215",
    "C216",
    "C217",
    "C218",
    "C219",
    "C301",
    "C302",
    "C303",
    "C304",
    "C305",
    "C306",
    "C307",
    "C308",
    "C309",
    "C310",
    "C311",
    "C312",
    "C313",
    "C314",
    "C315",
    "C316",
    "C317",
    "C318",
    "C319",
  ];

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <main
        className="dashboard"
        style={{ width: "100%", height: "100%",overflowY:"auto"}}
      >
        <div className="profile bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
            Random Room Assign
          </h2>
          <hr className="w-full my-4 border-t border-gray-300" />
          <p
            className="reminder text-center mb-4"
            style={{ color: "#333", fontSize: "0.875rem" }}
          >
            Reminder: Select Only Available Rooms.
          </p>
          <br />
          <div className="p-4">
            <h4 className="text-2xl font-light text-gray-700 mb-2 text-center">
              Select Rooms
            </h4>
            {["A", "B", "C"].map((block) => (
              <div className="block-section" key={block}>
                <p
                  className="reminder text-center mb-2"
                  style={{ color: "#333", fontSize: "0.875rem" }}
                >
                  Block {block}
                </p>
                <hr className="w-full my-4 border-t border-gray-300" />
                <div className="bg-gray-200 p-2 flex flex-wrap">
                  {roomNames
                    .filter((room) => room.startsWith(block))
                    .map((name) => (
                      <div
                        key={name}
                        className="flex items-center h-10 mr-4 mb-4"
                      >
                        <input
                          id={name}
                          type="checkbox"
                          className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={name} className="ml-2">
                          {name}
                        </label>
                      </div>
                    ))}
                </div>
                <br />
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-small py-2 px-2 rounded"
                style={{ width: "20%", fontSize:"20px"}}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roomallocation;

// import AdminSidebar from "../components/Sidebar";
// import { useState } from "react";

// const Roomallocation = () => {
//   const [selectedRooms, setSelectedRooms] = useState([]);

//   const handleCheckboxChange = (event) => {
//     const { id, checked } = event.target;
//     if (checked) {
//       setSelectedRooms((prevSelectedRooms) => [...prevSelectedRooms, id]);
//     } else {
//       setSelectedRooms((prevSelectedRooms) =>
//         prevSelectedRooms.filter((room) => room !== id)
//       );
//     }
//   };

//   const generateRoomNames = (blockPrefix) => {
//     const floors = ["01", "02", "03"];
//     const rooms = [];
//     floors.forEach((floor) => {
//       for (let i = 1; i <= 19; i++) {
//         rooms.push(`${blockPrefix}${floor}${i}`);
//       }
//     });
//     return rooms;
//   };

//   const boxNamesA = generateRoomNames("A1");
//   const boxNamesB = generateRoomNames("B1");
//   const boxNamesC = generateRoomNames("C1");

//   const handleSubmit = () => {
//     // Handle submitting the selected rooms
//     console.log("Selected Rooms:", selectedRooms);
//   };

//   return (
//     <div className="adminContainer">
//       <AdminSidebar />
//       <main className="dashboard" style={{ width: "100%", height: "100%" }}>
//         <div className="profile bg-white shadow-md rounded-lg ">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
//             Random Room Assign
//           </h2>
//           <p
//             className="reminder text-center mb-4"
//             style={{ color: "#333", fontSize: "0.875rem" }}
//           >
//             Reminder: Select Only Available Rooms.
//           </p>
//           <br />
//           <div className="p-4">
//             <h4 className="text-2xl font-light text-gray-700 mb-2 text-center">
//               Select Rooms
//             </h4>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block A
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesA.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block B
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesB.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block C
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesC.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Roomallocation;

// import AdminSidebar from "../components/Sidebar";
// import Checkboxes from "../components/Checkboxes";
// import { useState } from "react";

// const Roomallocation = () => {
//   const [selectedRooms, setSelectedRooms] = useState([]);
//   const boxNames = Array.from({ length: 19 }, (_, i) => `A1${i + 1}`);
//   const handleCheckboxChange = (event) => {
//     const { id, checked } = event.target;
//     if (checked) {
//       setSelectedRooms((prevSelectedRooms) => [...prevSelectedRooms, id]);
//     } else {
//       setSelectedRooms((prevSelectedRooms) =>
//         prevSelectedRooms.filter((room) => room !== id)
//       );
//     }
//   };
//   const generateRoomNames = (blockPrefix) => {
//     return Array.from({ length: 19 }, (_, i) => `${blockPrefix}${i + 1}`);
//   };
//   const boxNamesA = generateRoomNames("A1");
//   const boxNamesB = generateRoomNames("B2");
//   const boxNamesC = generateRoomNames("C3");

//   const handleSubmit = () => {
//     // Handle submitting the selected rooms
//     console.log("Selected Rooms:", selectedRooms);
//   };
//   return (
//     <div className="adminContainer">
//       <AdminSidebar />
//       <main className="dashboard" style={{ width: "100%", height: "100%" }}>
//         <div className="profile bg-white shadow-md rounded-lg ">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
//             Random Room Assign
//           </h2>
//           <p
//             className="reminder text-center mb-4"
//             style={{ color: "#333", fontSize: "0.875rem" }}
//           >
//             Reminder: Select Only Available Rooms.
//           </p>
//           <br />
//           <div className="p-4">
//             <h4 className="text-2xl font-light text-gray-700 mb-2 text-center">
//               Select Rooms
//             </h4>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block A
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesA.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block B
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesB.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="block-section">
//               <p
//                 className="reminder text-center mb-2"
//                 style={{ color: "#333", fontSize: "0.875rem" }}
//               >
//                 Block C
//               </p>
//               <div className="bg-gray-200 p-2 flex flex-wrap">
//                 {boxNamesC.map((name) => (
//                   <div key={name} className="flex items-center h-10 mr-4 mb-4">
//                     <input
//                       id={name}
//                       type="checkbox"
//                       className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
//                       onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor={name} className="ml-2">
//                       {name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Roomallocation;

{
  /* <section className="Rooms">
            <Checkboxes />
          </section> */
}
