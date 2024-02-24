// import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";

const ClientSidebar = () => {

    const location = useLocation();

    const menuItemsDashboard = [
        {
            url: "/client/dashboard",
            text: "Profile",
            Icon: RiDashboardFill
        },
        {
            url: "/client/registerroom",
            text: "Register Room",
            Icon: AiFillFileText
        },
        {
            url: "/client/complains",
            text: "Complains",
            Icon: IoIosPeople
        },
        {
            url: "/client/notices",
            text: "Notices",
            Icon: AiFillFileText
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
           
        </aside>
    );
};

export default ClientSidebar;
