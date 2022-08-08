import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [userIsActive, setUserIsActive] = useState(false);

  const navigate = useNavigate();

  const homeHandleClick = () => {
    setHomeIsActive(!homeIsActive);
    navigate("/");
    console.log(homeIsActive);
  };
  const userHandleClick = () => {
    setUserIsActive(!userIsActive);
    navigate("/users");
    console.log(userIsActive);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li
              className={
                homeIsActive ? "active sidebarListItem" : "sidebarListItem"
              }
              onClick={homeHandleClick}
            >
              <div className="activeItem">active item</div>
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              {/* <div className="inActiveItem">inactive item</div> */}
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li
              className={
                userIsActive ? "active sidebarListItem" : "sidebarListItem"
              }
              onClick={userHandleClick}
            >
              <div className="activeItem">active item</div>
              <PermIdentity className="sidebarIcon" />
              Users
            </li>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <div className="activeItem">active item</div>
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
