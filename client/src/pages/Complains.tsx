import Sidebar from '../components/Sidebar';
import ComplaintsList from '../components/ComplaintsList'; // Import ComplaintsList component

const Admindashboard = () => {
    return (
        <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
            <Sidebar />
            <div className="w-full p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <ComplaintsList /> {/* Add ComplaintsList component here */}
                {/* Add other content as needed */}
            </div>
        </div>
    );
};

export default Admindashboard;
