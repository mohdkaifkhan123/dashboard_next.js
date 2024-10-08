import React from "react";

export default function Statment() {
    return (
        <div className="flex flex-col items-center justify-center py-6  gap-y-4 ">
            <img src="statment.png" className="w-10 h-fit" />
            <p className="text-lg font-medium">No Statments available</p>
            <p className=" text-center w-3/4 text-sm" >A Summary Statment will be generated at the end of each month </p>
        </div>
    );
}