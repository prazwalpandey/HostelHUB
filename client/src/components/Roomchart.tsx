import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Roomchart = () => {
  const totalRooms = [
    // List of total rooms...
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
        setBookedRooms(data.bookedRooms || []); // Ensure bookedRooms is not null
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
  console.log(bookedRooms);

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
