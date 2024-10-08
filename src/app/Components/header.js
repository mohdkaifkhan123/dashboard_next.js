import React from "react";


export default function Header({ sideBar, toggleSideBar }) {
    return (
        <div className="flex justify-between py-6 px-4 sticky top-0 z-40 bg-white ">
            <img className="bg-white w-fit h-auto  " src="LogoComplte.png" />
            {!sideBar && <img onClick={() => toggleSideBar()} className=" cursor-pointer sm:hidden xs:block" src="List.png" />}
            {sideBar && <img onClick={() => toggleSideBar()} src="X.png " className="cursor-pointer sm:hidden xs:block hover:animate-spin" />}
            <ul className="sm:flex hidden gap-4 ">
                <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3 "> <p className="p-1 w-1 h-1 rounded-full bg-green-400"
                ></p> Active</li>
                <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3"> <img src="Help Icon.png" /> Help</li>
                <li className="bg-black text-white  rounded-full p-2">CV </li>
            </ul>
        </div>
    )
}    