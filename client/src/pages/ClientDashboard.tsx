import AdminSidebar from '../components/Sidebar';
import { IconType } from "react-icons";
import { FaHotel,  FaPeopleGroup} from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";


const ClientDashboard = () => {
    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main className='dashboard'>
            </main>
        </div>
    );
};

interface WidgetItemProps {
    heading: string;
    value: number;
    Icon: IconType;
}

const WidgetItem = ({
    heading,
    value,
    Icon,
}: WidgetItemProps) => (
    <article className="widget">
        <div className="widgetInfo">
           <div className="widgetContent">
            <p>{heading}</p>
                <h4>{`${value}`}</h4>
           </div>
            <Icon className='icon'/>
        </div>
    </article>
);

export default ClientDashboard;
