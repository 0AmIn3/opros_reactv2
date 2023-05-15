import React from "react";
import { useSelector } from "react-redux";

const UpDiogramItem = ({item , peoples }) => {
  
    let prosent = Math.round( item / peoples * 100)
  return (
    <div className="dioUpitem relative flex items-end ">
      <div className=" text-center flex flex-col absolute top-[8px] left-[50%] translate-x-[-50%]">
        <span className=" text-xl font-medium star_prot">{prosent}%</span>
        <span className=" text-[10px] font-light opacity-60 star_peo">{item} отв</span>
      </div>
      <div
        className=" w-full bg-[#C7FFAC]"
        style={{height: `${prosent}%`}}
      ></div>
    </div>
  );
};

export default UpDiogramItem;
