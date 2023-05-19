import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Bar = ({ color, item, newObjTot, idx }) => {
  const id = useParams();

  const users = useSelector((state) => state.users.data).filter(
    (item) => item.companyid === id.copid && item[id.id.slice(1)]
  );
  const [line, setline] = useState(0);

  function setLine() {
    // console.log(newObjTot);
    if (newObjTot.length > 0) {
      setline(
        Object.values(newObjTot[idx])
          .flat(2)
          .reduce((a, b) => a + b) / users.length
      );
    }
  }

  useEffect(() => {}, []);
  // let line = newObjTot.map((number) => ((number / newObjTot.reduce((a,b) => a + b)) * 100).toFixed(2) )[idx]
  return (
    <div className="h-[24px] flex w-full">
      {line > 0 ? (
        <>
          <div
            style={{
              width: `${line === 0 ? line : line}%`,
              backgroundColor: `${color}`,
            }}
            className="flex w-full h-full"
          ></div>
          <p>{Math.round(line)}%</p>
        </>
      ) : (
        setLine()
      )}
    </div>
  );
};

export default Bar;
