import ClientSidebar from '../components/Sidebar_client';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintsList from '../components/ComplaintsList';
const Clientcomplains = () => {
    return (
        <div className='adminContainer'>
            <ClientSidebar />
            <main className='dashboard'>
                <div className="w-full">
                    <ComplaintForm /> {/* Add ComplaintForm component here */}
                    <ComplaintsList /> {/* Add ComplaintsList component here */}
                    {/* Add other content as needed */}
                </div>
            </main>
        </div>
    );
};

export default Clientcomplains;