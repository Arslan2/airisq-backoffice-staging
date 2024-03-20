import React from "react";

export default function Clients() {
  const data = new Array(9).fill({
    badge: "Attention",
    cName: "XYZ Hospital Trust",
    city: "London",
    primaryContract: "Patricia L. Dubose",
    sites: "3",
  });
  return (
    <div className="py-6 px-8 bg-[#F9FDFF]">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-[#8686AB]">Client List</h5>
          <span className="text-[#7BBECF]">09/02/2024</span>
        </div>
        <div>
          <button className="bg-[#D9E2F2] text-[#84B8D3] p-3 rounded-full">
            Add New Client +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white px-3 py-2 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>Clients (799)</div>
            <button className="ml-4">Show Filters</button>
          </div>
          <div className="flex items-center">
            <input placeholder="keyword" className="p-3 w-1/3" />
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100" />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Badge
                </th>
                <th scope="col" className="px-6 py-3">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Primary Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Number of Sites
                </th>
                <th scope="col" className="px-6 py-3">
                  Attachments
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">
                    <span className="bg-blue-200 py-1 px-2 rounded-full">
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4">{row.cName}</td>
                  <td className="px-6 py-4">{row.city}</td>
                  <td className="px-6 py-4">{row.primaryContract}</td>
                  <td className="px-6 py-4">{row.sites}</td>
                  <td className="px-6 py-4">{"  "}</td>
                  <td className="px-6 py-4">{"  "}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
