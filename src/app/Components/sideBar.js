import React from "react";

export default function SideBar() {
  return (
    <div className="py-10 pl-6">
      <ul className="gap-y-5 flex flex-col overflow-x-hidden ">
        <li className="flex items-center gap-x-4  hover:bg-gray-100 cursor-pointer py-2">
          <img src="HouseHome.png" />
          <p className="w-fit">Home</p>
        </li>
        <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer py-2">
          <img src="FolderSimpleProgram.png" />
          <p className="w-fit">Programe</p>
        </li>
        <li className="flex items-center gap-x-4 border-l-4 bg-gray-100 py-2 border-[#595959]">
          <img src="UsersThreePeople.png" />
          <p>People</p>
        </li>
        <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer py-2">
          <img src="CalendarBlankActivity.png" />
          <p className="w-fit">Activity</p>
        </li>
        

        <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer py-2">
          <img src="UsersThreePeople.png" />
          <p className="w-fit">Billing</p>
        </li>
        <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer py-2">
          <img src="marketplace.png" />
          <p className="w-fit">Marketplace</p>
        </li>
        <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer py-2">
          <img src="ChartBarInsights.png" />
          <p className="w-fit">Insight</p>
        </li>
      </ul>
      <ul className="w-fit flex flex-col mt-3 gap-4  md:hidden ">
        <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3 ">
          {" "}
          <p className="p-1 w-1 h-1 rounded-full bg-green-400"></p> Active
        </li>
        <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3">
          {" "}
          <img src="Help Icon.png" /> Help
        </li>
        <li className="bg-black w-fit text-white  rounded-full p-2">CV </li>
      </ul>
    </div>
  );
}
