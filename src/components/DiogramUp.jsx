import React from "react";
import UpDiogramItem from "./UpDiogramItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const DiogramUp = ({ newobj ,item, opr, nowq, setPeoples, peoples }) => {
  // console.log(item)


  //   console.log(questUser);


  useEffect(() => {
    // console.log(newobj);
  });

  return (
    <div className="flex gap-3 mt-5">
      {newobj.map((item, idx) => (
        <UpDiogramItem key={idx} item={item} peoples={peoples}/>
      ))}
  
    </div>
  );
};

export default DiogramUp;
