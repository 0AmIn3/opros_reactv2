import React, { useEffect } from "react";

const Bar = ({ color , item , newObjTot , idx }) => {


  let line = newObjTot.map((number) => ((number / newObjTot.reduce((a,b) => a + b)) * 100).toFixed(2) )[idx]
  return (
    <div className="h-[24px] flex w-full">
      <div
        style={{ width: `${line === 0 ? line + 1 : line}%`, backgroundColor: `${color}` }}
        className="flex w-full h-full"
      ></div>
      <p>{line }%</p>
    </div>
  );
};

export default Bar;
