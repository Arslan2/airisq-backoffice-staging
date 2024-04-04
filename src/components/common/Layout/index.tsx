import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
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
import RightsReservedIcon from "../../../assets/img/rightsReservedIconLight.png";

interface SidebarProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: Function;
  sidebarOptions: {
    dashboard: boolean;
    client: boolean;
    sites: boolean;
    schedule: boolean;
    jobs: boolean;
    messaging: boolean;
    settings: boolean;
  };
}

type ContextType = {
  setSidebarOptions: Function;
};

function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);
  let { pathname } = useLocation();
  const [sidebarOptions, setSidebarOptions] = useState({
    dashboard: true,
    client: false,
    sites: false,
    schedule: false,
    jobs: false,
    messaging: false,
    settings: false,
  });
  return (
    <>
      <div className="flex">
        <Sidebar
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
          sidebarOptions={sidebarOptions}
        />
        <div
          className={`flex-1 flex flex-col w-full min-h-screen z-0 ${
            sidebarExpanded ? "ml-64" : "ml-20"
          } duration-1000`}
        >
          <Header />
          <Outlet context={{ setSidebarOptions } satisfies ContextType} />
          {pathname === "/client-list" || pathname === "/jobs" ? (
            <Footer />
          ) : (
            <CommonFooter />
          )}
        </div>
      </div>
    </>
  );
}

export function useSidebarOptions() {
  return useOutletContext<ContextType>();
}

function Header() {
  const [mobileMenu, toggleMobileMenu] = useState(false);
  return (
    <nav className="bg-white">
      <div className="py-4 px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <div className="hidden md:flex space-x-4">
              <span className="text-poster-blue">
                AirisQ Back Admin Dashboard
              </span>
            </div>
            <div className="relative">
              <input
                placeholder="Search"
                className="py-2 px-3 w-full bg-alice-blue rounded-full placeholder-poster-blue"
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

function CommonFooter() {
  return (
    <footer className="bg-alice-blue-50 bottom-0 py-6 px-8">
      <div className="flex items-center gap-3 text-poster-blue text-xs">
        <span>Lorem Ispum</span>
        <span>Lorem Ispum</span>
        <span>Lorem Ispum</span>
        <span>Lorem Ispum</span>
        <span>Lorem Ispum</span>
      </div>
      <div className="flex items-center text-pacific-blue text-xs gap-1">
        <img src={RightsReservedIcon} alt="Icon" />
        2024 All rights reserved
      </div>
    </footer>
  );
}

function Footer() {
  return (
    <footer className="bg-white sticky bottom-0">
      <div className="flex justify-between items-center p-5">
        <div className="text-raven">Showing 1 to 10 of 50 entries</div>
        <div className="text-raven flex items-center gap-2">
          <span>Display </span>
          <select className="border border-gainsboro bg-white p-2 rounded-lg">
            <option>5</option>
            <option selected>10</option>
            <option>15</option>
            <option>25</option>
          </select>
          <img src={ChevronLeftIcon} alt="icon" className="bg-gainsboro p-2" />
          <span className="bg-pacific-blue px-2 py-1 text-white rounded">
            1
          </span>
          <span className="px-2 py-1">2</span>
          <span className="px-2 py-1">3</span>
          <span className="px-2 py-1">4</span>
          <img src={ChevronRightIcon} alt="icon" className="bg-gainsboro p-2" />
        </div>
      </div>
    </footer>
  );
}

function Sidebar(props: SidebarProps) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState({
    client:
      props.sidebarOptions.client || props.sidebarOptions.sites ? true : false,
    messaging: false,
    settings: false,
  });

  const handleShowHideDropdown = (name: string) => {
    if (name === "client") {
      setShowDropdown({ ...showDropdown, client: !showDropdown.client });
    } else if (name === "messaging") {
      setShowDropdown({ ...showDropdown, messaging: !showDropdown.messaging });
    } else if (name === "settings") {
      setShowDropdown({ ...showDropdown, settings: !showDropdown.settings });
    }
  };

  useEffect(() => {
    setShowDropdown({
      client:
        props.sidebarOptions.client || props.sidebarOptions.sites
          ? true
          : false,
      messaging: false,
      settings: false,
    });
  }, [props.sidebarOptions.client, props.sidebarOptions.sites]);

  return (
    <div
      className={`${
        props.sidebarExpanded ? "w-64" : "w-20"
      } bg-hawkes-blue text-white h-screen fixed py-8 duration-1000 z-10`}
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
          selected={props.sidebarOptions.dashboard}
        />
        <DashboardRow
          image={ClientsIcon}
          title="Clients"
          selected={props.sidebarOptions.client}
          hidden={!props.sidebarExpanded}
          redirectLink="/client-list"
          showDropdown={showDropdown}
          setShowDropdown={handleShowHideDropdown}
          dropdownOpen={showDropdown.client}
        />
        {props.sidebarOptions.client ||
        (props.sidebarOptions.sites &&
          props.sidebarExpanded &&
          showDropdown.client) ? (
          <ul className="list-disc list-inside">
            <li
              className={`pl-16 pr-6 py-3 text-poster-blue cursor-pointer hover:underline-offset-1 hover:bg-pacific-blue ${
                props.sidebarOptions.sites ? "bg-pacific-blue" : ""
              }`}
              onClick={() => navigate("/client-list/sites")}
            >
              Sites
            </li>
            <li className="ml-10 px-6 py-3 text-poster-blue cursor-pointer hover:underline-offset-1">
              Contacts
            </li>
          </ul>
        ) : null}
        <DashboardRow
          image={ScheduleIcon}
          title="Schedule"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
          selected={props.sidebarOptions.schedule}
        />
        <DashboardRow
          image={JobsIcon}
          title="Jobs"
          hidden={!props.sidebarExpanded}
          redirectLink="/jobs"
          selected={props.sidebarOptions.jobs}
        />
        <DashboardRow
          image={MessagesIcon}
          title="Messaging"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
          selected={props.sidebarOptions.messaging}
        />
        <DashboardRow
          image={SettingsIcon}
          title="Settings"
          hidden={!props.sidebarExpanded}
          redirectLink="#"
          selected={props.sidebarOptions.settings}
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
            className={`bg-whisper p-2 rounded-full ${
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
      className={`flex justify-between items-center h-12 ${
        props.selected ? "bg-pacific-blue" : ""
      } cursor-pointer hover:bg-pacific-blue`}
    >
      <div className="flex items-center justify-between h-6 w-full">
        <Link to={props.redirectLink} className="w-full p-6">
          <div className="flex items-center gap-6 w-full">
            <img src={props.image} alt="icon" className="w-3.5 h-3.5" />
            <span
              className={`text-base text-poster-blue ${
                props.hidden && "opacity-0"
              } duration-500`}
            >
              {props.title}
            </span>
          </div>
        </Link>
        {props.showDropdown ? (
          <div className="pr-6" onClick={() => props.setShowDropdown("client")}>
            {props.dropdownOpen && props.selected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#14137B"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#14137B"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Layout;
