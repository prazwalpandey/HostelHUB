import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Roomchart = () => {
    const totalRooms = [
      "A101", "A102", "A103", "A104", "A105", "A106", "A107", "A108", "A109", "A110",
      "A111", "A112", "A113", "A114", "A115", "A116", "A117", "A118", "A119",
      "A201", "A202", "A203", "A204", "A205", "A206", "A207", "A208", "A209", "A210",
      "A211", "A212", "A213", "A214", "A215", "A216", "A217", "A218", "A219",
      "A301", "A302", "A303", "A304", "A305", "A306", "A307", "A308", "A309", "A310",
      "A311", "A312", "A313", "A314", "A315", "A316", "A317", "A318", "A319",
      "B101", "B102", "B103", "B104", "B105", "B106", "B107", "B108", "B109", "B110",
      "B111", "B112", "B113", "B114", "B115", "B116", "B117", "B118", "B119",
      "B201", "B202", "B203", "B204", "B205", "B206", "B207", "B208", "B209", "B210",
      "B211", "B212", "B213", "B214", "B215", "B216", "B217", "B218", "B219",
      "B301", "B302", "B303", "B304", "B305", "B306", "B307", "B308", "B309", "B310",
      "B311", "B312", "B313", "B314", "B315", "B316", "B317", "B318", "B319",
      "C101", "C102", "C103", "C104", "C105", "C106", "C107", "C108", "C109", "C110",
      "C111", "C112", "C113", "C114", "C115", "C116", "C117", "C118", "C119",
      "C201", "C202", "C203", "C204", "C205", "C206", "C207", "C208", "C209", "C210",
      "C211", "C212", "C213", "C214", "C215", "C216", "C217", "C218", "C219",
      "C301", "C302", "C303", "C304", "C305", "C306", "C307", "C308", "C309", "C310",
      "C311", "C312", "C313", "C314", "C315", "C316", "C317", "C318", "C319"
    ];
  
  const [bookedRooms, setBookedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/bookedrooms", {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBookedRooms(data.bookedRooms || []);
        console.log(bookedRooms); // Ensure bookedRooms is not null
        setLoading(false);
      } catch (error) {
        console.error("Error fetching booked rooms:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Count the number of free rooms
  const freeRooms = totalRooms.length - (bookedRooms ? bookedRooms.length : 0);
  // console.log(bookedRooms);

  // Count the number of booked rooms in each block
  const blockCounts = bookedRooms.reduce((acc, room) => {
    const block = room ? room[0] : null; // Ensure room is not null
    if (block) {
      acc[block] = (acc[block] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-center text-xl font-light mb-4" style={{ color: "#3a3e59", fontSize: "24px" }}>Room Availability Pie Chart</h2>
      <PieChart
        colors={['red', 'blue', 'green']}
        series={[
          {
            data: [
              { id: 0, value: freeRooms, label: 'Free Rooms', color: '#f9ac66' },
              { id: 1, value: blockCounts["A"] || 0, label: 'Block A', color: '#3a3e59' },
              { id: 2, value: blockCounts["B"] || 0, label: 'Block B', color: '#ed6b5b' },
              { id: 3, value: blockCounts["C"] || 0, label: 'Block C', color: '#c36B84' }
            ],
            innerRadius: 65,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          }
        ]}
        width={450}
        height={400}
      />
    </div>
  );
};

export default Roomchart;
