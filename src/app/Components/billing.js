"use client";
import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
  FaUserPlus,
} from "react-icons/fa";

export default function billing() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative overflow-x-auto lg:p-6 lg:pt-8 lg:pl-10 rounded-lg shadow-md sm:rounded-lg">

      <div className="">
        <h1 className="text-2xl font-bold ml-2">People</h1>
        <div className="flex space-x-8 mt-2">
          <button className="text-black font-semibold  ml-2">People</button>
          <button className="text-gray-500  ml-2">Properties</button>
        </div>
        <div className="w-full h-1 bg-gray-200 mt-2 mb-4">
          <div className="w-20 h-1 bg-black"></div>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 bg-white">
        <div className="space-x-2">
          <button
            className="hidden lg:inline-flex items-center text-white bg-black border focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 rounded-2xl text-sm px-3 py-1.5"
            type="button"
          >
            Approved
          </button>
          <button
            className="hidden lg:inline-flex items-center text-black bg-gray-100 focus:outline-none hover:bg-slate-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-sm px-3 py-1.5"
            type="button"
          >
            Awaiting Approval
          </button>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap space-x-4 items-center justify-between content-center">
          {/* Search Input */}
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full lg:w-auto mb-2 lg:mb-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block w-full lg:w-72 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name or email"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 w-full lg:w-auto">
            <button
              id="exportButton"
              className="inline-flex items-center text-black bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-full lg:w-auto sm:px-2 sm:py-1 px-4 py-2"
              type="button"
            >
              <FaCloudUploadAlt className="w-5 h-5 mr-2" />
              Export
            </button>

            <button
              id="bulkAddButton"
              className="hidden lg:inline-flex items-center text-black bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2"
              type="button"
            >
              <FaCloudDownloadAlt className="w-5 h-5 mr-2" />
              Bulk
            </button>

            <button
              id="addButton"
              onClick={toggleDrawer}
              className="inline-flex items-center text-white bg-gray-900 focus:outline-none hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full lg:w-auto px-4 py-2"
              type="button"
            >
              <FaUserPlus className="w-5 h-5 mr-2" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* The right drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          {/* Overlay with blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={toggleDrawer}
          ></div>

          {/* The actual drawer */}
          <div className="relative z-50 w-96 bg-white p-6 shadow-lg overflow-y-auto h-full">
            <h2 className="text-xl font-bold mb-4">Edit</h2>
            <form>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              />
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              />
              <label className="block mb-2">Phone</label>
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              />
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              />
              <label className="block mb-2">Property</label>
              <select className="w-full mb-4 p-2 border border-gray-300 rounded-md">
                <option value="">Select Property</option>
              </select>
              <label className="block mb-2">Unit</label>
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              />
              <button className="bg-black text-white w-full p-2 rounded-md mb-4">
                Save
              </button>
              <button
                className="text-gray-500 w-full p-2 rounded-md"
                onClick={toggleDrawer}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Table content */}
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Property
            </th>
            <th scope="col" className="px-6 py-3">
              Unit
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Last Invited
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
              <div>
                <div className="text-base font-semibold">JP</div>
                <div className="font-normal text-gray-500">
                  jyoch12@gmail.com
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-medium leading-tight text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </td>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">Admin</td>
            <td className="px-6 py-4">ABC</td>
            <td className="px-6 py-4">08/15/2024</td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>
    </div>
  );
}
