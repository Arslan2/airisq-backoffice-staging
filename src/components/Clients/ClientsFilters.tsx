import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import FilterIcon from "../../assets/img/filterIcon.png";

interface ClientsFilter {
  handleClickClearFilter: React.MouseEventHandler;
  handleApplyFilters: Function;
  setShowByBadge: (param: boolean) => void;
  showByBadge: boolean;
  showByBadgeFilter: {
    attention: boolean;
    expired: boolean;
  };
  setShowByBadgeFilter: (param: object) => void;
}

const ClientsFilters = ({
  handleClickClearFilter,
  handleApplyFilters,
  setShowByBadge,
  showByBadge,
  showByBadgeFilter,
  setShowByBadgeFilter,
}: ClientsFilter) => {
  return (
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
                  <div className="flex items-center gap-2">
                    <button
                      className="py-1 px-4 border border-pacific-blue rounded-lg"
                      onClick={handleClickClearFilter}
                    >
                      Clear
                    </button>
                    <button
                      className="py-1 px-4 border border-pacific-blue rounded-lg"
                      onClick={() => handleApplyFilters(close)}
                    >
                      Filter
                    </button>
                  </div>
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
  );
};

export default ClientsFilters;
