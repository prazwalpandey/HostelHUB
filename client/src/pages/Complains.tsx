import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import {lazy,Suspense} from 'react'
const ComplaintsList=lazy(()=>import('../components/ComplaintsList'))
const Admindashboard = () => {
    return (
        <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
            <Sidebar />
            <div className="w-full p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <Suspense fallback={<Loading />}>
                    <ComplaintsList />
                </Suspense>
            </div>
        </div>
    );
};

export default Admindashboard;


