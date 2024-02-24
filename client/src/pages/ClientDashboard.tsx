import ClientSidebar from '../components/Sidebar_client';
import Profile from '../components/Profile';

const Clientdashboard = () => {
  return (
    <div className='adminContainer'>
      <ClientSidebar />
      <main className='dashboard'>
        <Profile />
      </main>
    </div>
  );
};

export default Clientdashboard;
