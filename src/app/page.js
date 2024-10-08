"use client";

import { useState } from "react";
import Header from "./Components/header";
import Billing from "./Components/billing";

import SideBar from "./Components/sideBar";

export default function Home() {

  const [sideBar, setSlideState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);


  const toggleSideBar = () => {
    setSlideState(!sideBar);
  }

  return (
    <div className="divide-y">
      <Header sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <main className="flex divide-x">
        <div className={` ${sideBar ? "block" : "hidden"} z-10 md:block md:w-1/6 lg:1/6 sticky top-20  w-[100vw] h-full`} >
          <SideBar />
        </div>
        <div className={` divide-y px-4 md:w-5/6 lg:5/6 w-full ${sideBar ? "hidden" : "block"} md:block `}>
          <Billing setIsModalOpen={setIsModalOpen} />
        </div>
      </main>
    </div>
  );
}
