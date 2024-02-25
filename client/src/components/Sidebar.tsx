// import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { RiFileList3Fill } from 'react-icons/ri';

const AdminSidebar = () => {

    const location = useLocation();

    const menuItemsDashboard = [
        {
            url: "/admin/dashboard",
            text: "Dashboard",
            Icon: RiDashboardFill
        },
        {
            url: "/admin/roomallocation",
            text: "Room Allocation",
            Icon: SiGoogleclassroom
        },
        {
            url: "/admin/complains",
            text: "Complains",
            Icon: IoIosPeople
        },
        {
            url: "/admin/notices",
            text: "Notices",
            Icon: AiFillFileText
        },
        {
            url: "/admin/studentrecords",
            text: "Student Records",
            Icon: RiFileList3Fill
        }
    ];
    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                {menuItemsDashboard.map(({ url, text, Icon }) => (
                    <li
                        key={text}
                        style={{
                            backgroundColor: location.pathname.includes(url) ? "rgba(0, 115, 255, 0.1)" : "white",
                        }}
                    >
                        <Link
                            to={url}
                            style={{
                                color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "black",
                            }}
                        >
                            <Icon className="listIcon"/>
                            {text}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className="flex justify-center mt-4" style={{position:"absolute", bottom:"1%"}}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-small py-1 px-1 rounded"
                style={{ width: "auto" }}
              >
                Log Out
              </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
