
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Suspense,lazy } from "react";
import Loading from './components/Loading';
import Roomallocation from './pages/Roomallocation'
import Complains from "./pages/Complains";
import Notices from "./pages/Notices";
import '../index.css';
// import Clientdashboard from "./pages/Clientdashboard";
import Clientnotices from "./pages/Clientnotices";
import Clientcomplains from "./pages/Clientcomplains";
import Profile from "./components/Profile";
import Signin from "./pages/clientSignin";


const Admindashboard=lazy(()=> import("./pages/Admindashboard"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Admindashboard />} />
          <Route path="/admin/roomallocation" element={<Roomallocation/>}/>
          <Route path="/admin/complains" element={<Complains/>}/>
          <Route path="/admin/notices" element={<Notices/>}/>
          <Route path="/" element={<Signin/>} />
          <Route path="/client/dashboard" element={<Profile/>} />
          <Route path="/client/notices" element={<Clientnotices/>}/>
          <Route path="/client/complains" element={<Clientcomplains/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
