import React from "react";

export default function Chats() {
  return (
    <>
      <div className="bg-white flex w-[100%] h-[100%] ">
        <div className="bg-black w-[25%] h-[100%]">
          <div className="bg-white h-[15%] "> search </div>
          <div className=" bg-slate-400 h-[85%] p-2 overflow-y-scroll">
            <div className="bg-black text-white flex flex-row items-center gap-2 h-[15%] w-full">
            <img className="w-[35px] h-[35px] rounded-[50%]" src="" alt="" />
            <p>Friends Name</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 w-[75%] h-[100%]">
          <div className=" bg-white h-[15%] flex flex-row px-2 gap-5 items-center w-full">
            <img className="w-[50px] h-[50px] rounded-[50%]" src="" alt="" />
            <p>Friends Name</p>
          </div>
          <div className=" bg-slate-700 h-[85%] w-full"></div>
        </div>
      </div>
    </>
  );
}
