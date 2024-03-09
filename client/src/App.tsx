import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Loading from './components/Loading';
import '../index.css';
import { Navigate } from "react-router-dom";
import Changepassword from "./pages/Changepassword";

const Admindashboard = lazy(() => import("./pages/Admindashboard"));
const Profile = lazy(() => import("./components/Profile"));

const Roomallocation = lazy(() => import('./pages/Roomallocation'));
const Complains = lazy(() => import('./pages/Complains'));
const Clientregisterroom = lazy(() => import('./pages/Clientregisterroom'));
const Notices = lazy(() => import('./pages/Notices'));
const Clientnotices = lazy(() => import('./pages/Clientnotices'));
const Clientcomplains = lazy(() => import('./pages/Clientcomplains'));
const Studentrecords = lazy(() => import('./pages/Studentrecords'));
const Login = lazy(() => import('./pages/clientSignin'));

const App = () => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, isAdmin: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const adminResponse = await fetch("http://localhost:5000/admin/auth/checkauthentication", {
          method: 'GET',
          credentials: 'include',
        });
        const userResponse = await fetch("http://localhost:5000/user/auth/checkauthentication", {
          method: 'GET',
          credentials: 'include',
        });

        if (adminResponse.ok) {
          setAuthState({ isAuthenticated: true, isAdmin: true });
        } else if (userResponse.ok) {
          setAuthState({ isAuthenticated: true, isAdmin: false });
        } else {
          setAuthState({ isAuthenticated: false, isAdmin: false });
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setAuthState({ isAuthenticated: false, isAdmin: false });
      } finally {
        setLoading(false); // Set loading to false after authentication check is complete
      }
    };

    checkAuthentication();
  }, []);

  // If still loading, show loading indicator
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to={authState.isAuthenticated ? (authState.isAdmin ? "/admin/dashboard" : "/client/dashboard") : "/login"} replace />} />
          <Route path="/login" element={authState.isAuthenticated ? <Navigate to={authState.isAuthenticated ? (authState.isAdmin ? "/admin/dashboard" : "/client/dashboard") : "/login"} replace /> : <Login />} />
          <Route path="/admin/dashboard" element={authState.isAuthenticated && authState.isAdmin ? <Admindashboard /> : <Navigate to="/login" replace />} />
          <Route path="/client/dashboard" element={authState.isAuthenticated && !authState.isAdmin ? <Profile /> : <Navigate to="/login" replace />} />
          {/* Other routes for admin */}
          <Route path="/admin/roomallocation" element={authState.isAuthenticated && authState.isAdmin ? <Roomallocation /> : <Navigate to="/login" replace />} />
          <Route path="/admin/complains" element={authState.isAuthenticated && authState.isAdmin ? <Complains /> : <Navigate to="/login" replace />} />
          <Route path="/admin/notices" element={authState.isAuthenticated && authState.isAdmin ? <Notices /> : <Navigate to="/login" replace />} />
          <Route path="/admin/studentrecords" element={authState.isAuthenticated && authState.isAdmin ? <Studentrecords /> : <Navigate to="/login" replace />} />
          <Route path="/admin/changepassword" element={authState.isAuthenticated && authState.isAdmin ? <Changepassword /> : <Navigate to="/login" replace />} />

          {/* Other routes for client */}
          <Route path="/client/registerroom" element={authState.isAuthenticated && !authState.isAdmin ? <Clientregisterroom /> : <Navigate to="/login" replace />} />
          <Route path="/client/complains" element={authState.isAuthenticated && !authState.isAdmin ? <Clientcomplains /> : <Navigate to="/login" replace />} />
          <Route path="/client/notices" element={authState.isAuthenticated && !authState.isAdmin ? <Clientnotices /> : <Navigate to="/login" replace />} />
          {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
