import React, { useEffect } from "react";

const BarV2 = ({ color , item , newOb , idx }) => {


// console.log(newOb);
  let line = Math.round(newOb[idx].map((number) => ((number / newOb.flat(2).reduce((a,b) => a + b)) * 100 )).reduce((a,b) => a + b))
  console.log();
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

export default BarV2;
