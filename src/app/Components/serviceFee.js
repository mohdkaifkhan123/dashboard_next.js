import React from "react";

export default function ServiceFee() {
    return (
        <div className="flex flex-col items-center justify-center py-6 gap-y-4 ">
            <img src="ServiceFee.png" className="w-10 h-fit" />
            <p className="text-lg font-medium">No Service fees charged</p>
            <p className=" text-center w-3/4 text-sm" >No service fees have been charged yet</p>
        </div>
    );
}