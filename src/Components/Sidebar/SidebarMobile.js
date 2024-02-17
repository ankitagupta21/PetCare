import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Sidebar.css";

import Logo from "../../assets/img/Logo.png";
import Chat from "../../assets/img/Chat.png";
import { SidebarData } from "./SidebarData";
import { IoLogOutOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function SidebarMobile() {
  const location = useLocation();
  const path = location.pathname;
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="Sidebar-Active">
        {sidebar ? (
          <div className="Sidebar">
            <div
              className="Sidebar-Menu-Icon"
              onClick={() => setSidebar(false)}
            >
              <IoMdClose />
            </div>
            <div className="Sidebar-Logo">
              <img src={Logo} alt="Logo" />
              <p>PetCare.</p>
            </div>
            <div className="Sidebar-Content">
              <div className="Sidebar-Menu">
                {SidebarData.map((item, index) => {
                  return (
                    <div key={index} className="Sidebar-Menu-Items">
                      <p>{item.title}</p>
                      <div>
                        {item.items.map((subItem, subIndex) => {
                          return (
                            <div
                              key={subIndex}
                              className={
                                "Sidebar-Menu-Item" +
                                (path === subItem.path ? " Active" : "")
                              }
                            >
                              {subItem.title === "Chat" ? (
                                <div className="Sidebar-Sch">
                                  <div className="Sidebar-Sch-Left">
                                    <div className="Sidebar-Icon">
                                      {subItem.icon}
                                    </div>
                                    <Link
                                      to={subItem.path}
                                      className="Sidebar-Menu-Item-Link"
                                    >
                                      <p>{subItem.title}</p>
                                    </Link>
                                  </div>
                                  <div className="Sidebar-Sch-Right">
                                    <img src={Chat} alt="Chat" />
                                  </div>
                                </div>
                              ) : subItem.title === "Appointments" ? (
                                <div className="Sidebar-Sch">
                                  <div className="Sidebar-Sch-Left">
                                    <div className="Sidebar-Icon">
                                      {subItem.icon}
                                    </div>
                                    <Link
                                      to={subItem.path}
                                      className="Sidebar-Menu-Item-Link"
                                    >
                                      <p>{subItem.title}</p>
                                    </Link>
                                  </div>
                                  <div className="Sidebar-Sch-Right Notification">
                                    <div>2</div>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="Sidebar-Icon">
                                    {subItem.icon}
                                  </div>
                                  <Link
                                    to={subItem.path}
                                    className="Sidebar-Menu-Item-Link"
                                  >
                                    <p>{subItem.title}</p>
                                  </Link>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {index === SidebarData.length - 1 ? null : (
                        <div className="Sidebar-Menu-Item-Divider"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div
                className={
                  "Sidebar-Logout" + (path === "/logout" ? " Active" : "")
                }
              >
                <div className="Sidebar-Icon">
                  <IoLogOutOutline />
                </div>
                <Link to="/logout" className="Sidebar-Logout-Link">
                  <p>Log out</p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="Sidebar-Menu-Icon" onClick={showSidebar}>
            <MdMenu />
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarMobile;
