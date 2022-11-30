import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const menu = [
  {
    icon: "",
    title: "Form",
    child: [
      {
        title: "Form basic",
        path: "/form",
      },
      {
        title: "Form Pop",
        path: "/form",
      },
      {
        title: "Form Login",
        path: "/form",
      },
    ],
  },
  {
    icon: "",
    title: "Dropdown",
    child: [
      {
        title: "Dropdown",
        path: "/dropdown",
      },
    ],
  },
  {
    icon: "",
    title: "masuk",
  },
];

function SidebarItem({ menu }) {
  const [open, setOpen] = useState(false);

  if (menu.child) {
    return (
      <div className={open ? "sidebar-main active" : "sidebar-main"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span className="sidebar-title-sub">
            {menu.icon && <i>{menu.icon}</i>}
            {menu.title}
          </span>
          <MdKeyboardArrowRight className="sidebar-title-icon" />
        </div>
        <div className="sidebar-main-menu">
          {menu.child.map((child, index) => (
            <SidebarItem key={index} menu={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={menu.path || "#"} className="sidebar-main single">
        {menu.icon && <i className={menu.icon}></i>}
        {menu.title}
      </Link>
    );
  }
}

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">
        <h1>THABYS</h1>
      </Link>
      {menu.map((menu, index) => (
        <SidebarItem key={index} menu={menu} />
      ))}
    </div>
  );
}

export default Sidebar;
