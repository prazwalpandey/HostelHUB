import AdminSidebar from "../components/Sidebar";
import { IconType } from "react-icons";
import { FaHotel, FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import Roomchart from "../components/Roomchart";

const Admindashboard = () => {
  const widgetItemsData = [
    {
      value: 171,
      heading: "Rooms",
      Icon: FaHotel,
    },
    {
      value: 342,// change the value according to data in database
      heading: "Students",
      Icon: FaPeopleGroup,
    },
    {
      value: 200,
      heading: "Complains",
      Icon: CgNotes,
    },
  ];

  return (
    <div className="adminContainer" style={{ width: "100vw", height: "100vh"}}>
      <AdminSidebar />
        <main className="dashboard profile" style={{ width: "100%", height: "100%",overflowY:"auto",paddingBottom:"0",marginBottom:"0"}}>
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
          <br />
          <div className="info flex flex-row mt-8">
            <div className="profile mx-5 w-1/2"></div>
          <div className="profile container mx-auto  w-1/2">
            <Roomchart />
          </div>
          </div>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  Icon: IconType;
}

const WidgetItem = ({ heading, value, Icon }: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <div className="widgetContent">
        <p>{heading}</p>
        <h4>{`${value}`}</h4>
      </div>
      <Icon className="icon" />
    </div>
  </article>
);

export default Admindashboard;
