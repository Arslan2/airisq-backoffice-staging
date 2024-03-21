import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LogoImage from "../../../assets/img/test-image.jpg";
import SidebarLogo from "../../../assets/img/AirisQ-HiRes.png";
import DashboardIcon from "../../../assets/img/dashboardIcon.png";
import ClientsIcon from "../../../assets/img/clientsIcon.png";
import ScheduleIcon from "../../../assets/img/scheduleIcon.png";
import JobsIcon from "../../../assets/img/jobsIcon.png";
import MessagesIcon from "../../../assets/img/messagesIcon.png";
import SettingsIcon from "../../../assets/img/settingsIcon.png";
import SidebarArrowIcon from "../../../assets/img/SidebarArrowIcon.png";

interface SidebarProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: Function;
}

function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);
  return (
    <>
      <div className="flex">
        <Sidebar
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />
        <div
          className={`flex-1 w-full min-h-screen z-0 ${
            sidebarExpanded ? "ml-64" : "ml-20"
          } duration-1000`}
        >
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
function Header() {
  const [mobileMenu, toggleMobileMenu] = useState(false);
  return (
    <nav className="bg-white">
      <div className="py-4 px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <div className="hidden md:flex space-x-4">
              <Link to="/">Dashboard</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/client-list">Clients</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/login">Login</Link>
            <Link
              className="bg-green-400 p-2 rounded text-center text-white"
              to="/login"
            >
              Signup
            </Link>
            <img className="rounded-full w-8 h-8" src={LogoImage} />
          </div>
          <button
            type="button"
            onClick={() => {
              toggleMobileMenu(!mobileMenu);
            }}
            className="block md:hidden"
          >
            {mobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${mobileMenu ? "" : "hidden"} md:hidden`}>
          <Link className="block" to="/">
            Home
          </Link>
          <Link className="block" to="/login">
            Login
          </Link>
          <Link
            className="block bg-green-400 p-2 rounded text-center text-white"
            to="/login"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-100 layout-footer">
      <div className="max-w-6xl py-2 px-4">Footer</div>
    </footer>
  );
}

function Sidebar(props: SidebarProps) {
  return (
    <div
      className={`${
        props.sidebarExpanded ? "w-64" : "w-20"
      } bg-[#D8E2F2] text-white h-screen fixed py-8 duration-1000 z-10`}
    >
      <div className="flex flex-col items-center justify-start h-24">
        <img
          src={SidebarLogo}
          alt="Airisq Logo"
          className={`${
            props.sidebarExpanded ? "" : "w-7 h-10"
          } transition-[width] duration-1000`}
        />
      </div>
      <div className="mt-5">
        <DashboardRow
          image={DashboardIcon}
          title="Dashboard"
          hidden={!props.sidebarExpanded}
        />
        <DashboardRow
          image={ClientsIcon}
          title="Clients"
          selected={true}
          hidden={!props.sidebarExpanded}
        />
        <DashboardRow
          image={ScheduleIcon}
          title="Schedule"
          hidden={!props.sidebarExpanded}
        />
        <DashboardRow
          image={JobsIcon}
          title="Jobs"
          hidden={!props.sidebarExpanded}
        />
        <DashboardRow
          image={MessagesIcon}
          title="Messaging"
          hidden={!props.sidebarExpanded}
        />
        <DashboardRow
          image={SettingsIcon}
          title="Settings"
          hidden={!props.sidebarExpanded}
        />
      </div>
      <div className="absolute bottom-10 -right-6 z-20">
        <button
          className=""
          onClick={() => props.setSidebarExpanded(!props.sidebarExpanded)}
        >
          <img
            src={SidebarArrowIcon}
            alt="icon"
            className={`bg-[#E4E4E4] p-4 rounded-full ${
              props.sidebarExpanded ? "" : "rotate-180"
            } duration-500`}
          />
        </button>
      </div>
    </div>
  );
}

function DashboardRow(props: any) {
  return (
    <div
      className={`flex justify-between items-center h-12 p-6 ${
        props.selected ? "bg-[#009DCC]" : ""
      }`}
    >
      <div className="flex items-center gap-6 h-6">
        <img src={props.image} alt="icon" className="w-3.5 h-3.5" />
        <span
          className={`text-base text-[#14137B] ${
            props.hidden && "opacity-0"
          } duration-500`}
        >
          {props.title}
        </span>
      </div>
    </div>
  );
}

export default Layout;
