import AdminSidebar from "../components/Sidebar";
import { IconType } from "react-icons";
import { FaHotel, FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import Roomchart from "../components/Roomchart";
import Photo from "../assets/userpic.png";

const Admindashboard = () => {
  const widgetItemsData = [
    {
      value: 171,
      heading: "Rooms",
      Icon: FaHotel,
    },
    {
      value: 342, // change the value according to data in database
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
    <div className="adminContainer" style={{ width: "100vw", height: "100vh" }}>
      <AdminSidebar />
      <main
        className="dashboard profile"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          paddingBottom: "0",
          marginBottom: "0",
          background:"white"
        }}
      >
        <section className="widgetcontainer" style={{justifyContent:"space-evenly"}}>
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
        <div className="flex flex-row mt-2">
          <div className="profile w-1/2 flex flex-col" style={{padding:"1rem",alignItems:"center"}}>
            <p className="warden text-center text-xl font-light " style={{ color: "#3a3e59",fontSize: "24px"}}>Hostel Warden</p>
            <hr className="w-full my-4 border-t border-gray-300" />
            <br />
            <div className="logo-container flex" style={{justifyContent:"center"}}>
                <img src={Photo} alt="Logo" className="logo" style={{width:"70%",borderRadius:"50%"}} />
            </div>
            <br />
            <p className="warden text-center text-xl font-light " style={{ color: "#3a3e59",fontSize: "24px"}}>Mr. Roshan Karki</p>
          </div>
          <div className="container w-1/2">
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