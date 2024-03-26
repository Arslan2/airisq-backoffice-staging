import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import ClientIcon from "../../assets/img/clientsIcon.png";
import FilterIcon from "../../assets/img/filterIcon.png";
import WordIcon from "../../assets/img/wordIcon.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import EditIcon from "../../assets/img/editIcon.png";
import DeleteIcon from "../../assets/img/deleteIcon.png";
import SearchIcon from "../../assets/img/SearchIcon.png";

export default function Clients() {
  const navigate = useNavigate();
  const [showByBadge, setShowByBadge] = useState(false);
  const [showByBadgeFilter, setShowByBadgeFilter] = useState({
    attention: false,
    expired: false,
  });

  const tempData = new Array(19).fill({
    badge: 'Attention',
    cName: 'XYZ Hospital Trust',
    city: 'London',
    primaryContract: 'Patricia L. Dubose',
    sites: '3',
  });

  const [data, setData] = useState(tempData);

  const handleApplyFilters = (closeBox) => {
    let dataT = tempData;
    if (
      (showByBadgeFilter.attention && showByBadgeFilter.expired) ||
      (!showByBadgeFilter.attention && !showByBadgeFilter.expired)
    ) {
      setData(dataT);
    } else if (showByBadgeFilter.attention && !showByBadgeFilter.expired) {
      dataT = data.filter((curr) => curr.badge === "Attention");
      setData(dataT);
    } else {
      dataT = data.filter((curr) => curr.badge === "Expired");
      setData(dataT);
    }
    closeBox();
  };

  const handleClickClearFilter = () => {
    setShowByBadge(false);
    setShowByBadgeFilter({ attention: false, expired: false });
    setData(tempData);
  };

  return (
    <div className="py-6 px-8 bg-alice-blue-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 text-poster-blue">
          <h5 className="">Dashboard</h5>
          <h5 className="">Client List</h5>
        </div>
        <div>
          <button className="bg-pacific-blue text-white py-3 px-5 rounded-full">
            Add New Client +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white py-2 shadow-lg border border-pale-cornflower-blue rounded-lg">
        <div className="flex items-center justify-between px-3 mb-5">
          <div className="flex items-center text-poster-blue gap-5">
            <div className="flex items-center gap-2">
              <img src={ClientIcon} alt="icon" />
              Clients (799)
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full items-center gap-x-1.5 rounded-md px-3 py-2 hover:bg-gray-50">
                  <img src={FilterIcon} alt="icon" />
                  Show Filters
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 py-5 mt-2 w-96 origin-top-right rounded-md bg-white shadow-xl border border-pacific-blue focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ close }) => (
                        <div className="flex justify-between px-5">
                          <div className="flex items-center gap-x-2">
                            <img src={FilterIcon} alt="icon" />
                            <span>Search Filters</span>
                          </div>
                          <div>
                            <button
                              className="py-1 px-4 border border-pacific-blue rounded-lg"
                              onClick={handleClickClearFilter}
                            >
                              Clear
                            </button>
                          </div>
                          <button
                            className="py-1 px-4 border border-pacific-blue rounded-lg"
                            onClick={() => handleApplyFilters(close)}
                          >
                            Filter
                          </button>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {() => (
                        <>
                          <div
                            onClick={() => setShowByBadge(!showByBadge)}
                            className="hover:bg-gray-100 mt-5 px-9 py-2 text-sm flex items-center justify-between cursor-pointer"
                          >
                            <span>By Badge</span>
                            {showByBadge ? (
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
                                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
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
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            )}
                          </div>
                          <div className={showByBadge ? "block" : "hidden"}>
                            <div className="flex items-center py-6 px-4 bg-hawkes-blue">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value="expired"
                                checked={showByBadgeFilter.expired}
                                onChange={(e) =>
                                  setShowByBadgeFilter({
                                  ...showByBadgeFilter,
                                  expired: e.target.checked,
                                })
                                }
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm"
                              >
                                Expired
                              </label>
                            </div>
                            <div className="flex items-center py-6 px-4 bg-hawkes-blue">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value="attention"
                                checked={showByBadgeFilter.attention}
                                onChange={(e) =>
                                  setShowByBadgeFilter({
                                  ...showByBadgeFilter,
                                  attention: e.target.checked,
                                })
                                }
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-pale-cornfower-blue"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm"
                              >
                                Attention
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {() => (
                        <div className="hover:bg-gray-100 mt-5 px-9 py-2 text-sm flex items-center justify-between cursor-pointer">
                          <span>By Name</span>
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
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {() => (
                        <div className="hover:bg-gray-100 mt-5 px-9 py-2 text-sm flex items-center justify-between cursor-pointer">
                          <span>By Year</span>
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
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {() => (
                        <div className="hover:bg-gray-100 mt-5 px-9 py-2 text-sm flex items-center justify-between cursor-pointer">
                          <span>By Number of Sites</span>
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
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex items-center justify-end gap-3">
            <img src={ExcelIcon} alt="icon" />
            <img src={WordIcon} alt="icon" />
            <img src={PdfIcon} alt="icon" />
            <input
              placeholder="Search"
              className="py-2 px-3 w-2/3 bg-alice-blue rounded-full placeholder-poster-blue relative"
            />
            <div className="absolute right-16">
              <img src={SearchIcon} alt="icon" />
            </div>
          </div>
        </div>
        <hr className="h-0.5 border-t-0 bg-pale-cornflower-blue" />

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-poster-blue">
            <thead className="text-xs text-gray-700 uppercase">
              <tr className="px-3 py-5 border-b border-pale-cornflower-blue">
                <th scope="col" className="px-6 py-5">
                  Badge
                </th>
                <th scope="col" className="px-6 py-5">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-5">
                  City
                </th>
                <th scope="col" className="px-6 py-5">
                  Primary Contact
                </th>
                <th scope="col" className="px-6 py-5">
                  Number of Sites
                </th>
                <th scope="col" className="px-6 py-5">
                  Attachments
                </th>
                <th scope="col" className="px-6 py-5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, key) => (
                <tr
                  key={key}
                  className="bg-white border-b border-pale-cornflower-blue px-3"
                >
                  <td className="px-6 py-4">
                    <span className="bg-blue-200 py-1 px-2 rounded-full">
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4">{row.cName}</td>
                  <td className="px-6 py-4">{row.city}</td>
                  <td className="px-6 py-4">{row.primaryContract}</td>
                  <td className="px-6 py-4">{row.sites}</td>
                  <td className="px-6 py-4 flex items-end gap-3">
                    <div className="flex items-end gap-1">
                      <img src={WordIcon} alt="icon" /> <span>(4)</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <img src={PdfIcon} alt="icon" /> <span>(4)</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <img src={ExcelIcon} alt="icon" /> <span>(4)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <img
                        src={EditIcon}
                        alt="icon"
                        onClick={() => navigate("/client-list/edit/1")}
                        className="bg-hawkes-blue p-1 rounded-lg"
                      />
                      <img
                        src={DeleteIcon}
                        alt="Icon"
                        className="bg-hawkes-blue p-1 rounded-lg"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
