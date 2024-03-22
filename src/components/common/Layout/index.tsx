import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LogoImage from "../../../assets/img/test-image.jpg";
import SidebarLogo from "../../../assets/img/AirisQ-HiRes.png";
import DashboardIcon from "../../../assets/img/dashboardIcon.png";
import ClientsIcon from "../../../assets/img/clientsIcon.png";
import ScheduleIcon from "../../../assets/img/scheduleIcon.png";
import JobsIcon from "../../../assets/img/jobsIcon.png";
import MessagesIcon from "../../../assets/img/messagesIcon.png";
import SettingsIcon from "../../../assets/img/settingsIcon.png";
import SidebarArrowIcon from "../../../assets/img/SidebarArrowIcon.png";
import LogoutIcon from "../../../assets/img/logoutIcon.png";
import NotificationIcon from "../../../assets/img/notificationIcon.png";
import SearchIcon from "../../../assets/img/SearchIcon.png";
import ChevronRightIcon from "../../../assets/img/chevronRightIcon.png";
import ChevronLeftIcon from "../../../assets/img/chevronLeftIcon.png";

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
          <Footer />
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
              <span className="text-[#14137B]">
                AirisQ Back Admin Dashboard
              </span>
            </div>
            <div className="relative">
              <input
                placeholder="Search"
                className="py-2 px-3 w-full bg-[#F0F5FD] rounded-full placeholder-[#14137B]"
              />
              <div className="absolute right-3 bottom-3">
                <img src={SearchIcon} alt="icon" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <img src={NotificationIcon} alt="icon" className="h-8 w-8" />
            <img className="rounded-full w-10 h-10" src={LogoImage} />
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
    <footer className="bg-white sticky bottom-0">
      <div className="flex justify-between items-center p-5">
        <div className="text-[#6C757D]">Showing 1 to 10 of 50 entries</div>
        <div className="text-[#6C757D] flex items-center gap-2">
          <span>Display </span>
          <select className="border border-[#DFDFDF] bg-white p-2 rounded-lg">
            <option>5</option>
            <option selected>10</option>
            <option>15</option>
            <option>25</option>
          </select>
          <img src={ChevronLeftIcon} alt="icon" className="bg-[#DFDFDF] p-2" />
          <span className="bg-[#009DCC] px-2 py-1 text-white rounded">1</span>
          <span className="px-2 py-1">2</span>
          <span className="px-2 py-1">3</span>
          <span className="px-2 py-1">4</span>
          <img src={ChevronRightIcon} alt="icon" className="bg-[#DFDFDF] p-2" />
        </div>
      </div>
    </footer>
  );
}

function Sidebar(props: SidebarProps) {
  let {pathname} = useLocation();
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
          redirectLink="/"
          selected={pathname === "/"}
        />
        <DashboardRow
          image={ClientsIcon}
          title="Clients"
          selected={pathname === "/client-list"}
          hidden={!props.sidebarExpanded}
          redirectLink="/client-list"
        />
        <DashboardRow
          image={ScheduleIcon}
          title="Schedule"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
        />
        <DashboardRow
          image={JobsIcon}
          title="Jobs"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
        />
        <DashboardRow
          image={MessagesIcon}
          title="Messaging"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
        />
        <DashboardRow
          image={SettingsIcon}
          title="Settings"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
        />
      </div>
      <div className="absolute bottom-5 w-full">
        <DashboardRow
          image={LogoutIcon}
          title="Logout"
          hidden={!props.sidebarExpanded}
          redirectLink="/login"
        />
      </div>
      <div className="absolute bottom-16 -right-4 z-20">
        <button
          className=""
          onClick={() => props.setSidebarExpanded(!props.sidebarExpanded)}
        >
          <img
            src={SidebarArrowIcon}
            alt="icon"
            className={`bg-[#E4E4E4] p-2 rounded-full ${
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
    <Link to={props.redirectLink}
      className={`flex justify-between items-center h-12 p-6 ${
        props.selected ? "bg-[#009DCC]" : ""
      } cursor-pointer hover:bg-[#009DCC]`}
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
    </Link>
  );
}

export default Layout;
