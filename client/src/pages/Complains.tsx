import AdminSidebar from '../components/Sidebar';
import { IconType } from "react-icons";
import { FaHotel,  FaPeopleGroup} from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";


const Complains = () => {
    const widgetItemsData = [
        {
            value: 300, heading: "Rooms", Icon: FaHotel
        },
        {
            value: 400, heading: "Students", Icon: FaPeopleGroup
        },
        {
            value: 200, heading: "Complains", Icon: CgNotes
        },
        {
            value: 300, heading: "Notices", Icon: IoNotifications
        }
    ];

    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main className='dashboard'>
                <section className="widgetcontainer">
                    {widgetItemsData.map((item, index) => (
                        <WidgetItem
                            key={index}
                            value={item.value}
                            heading={item.heading}
                            Icon={item.Icon}
                        />
                    ))}
                </section>
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

export default Complains;
