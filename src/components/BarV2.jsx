import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BarV2 = ({
  color,
  item,
  changeTotal,
  changeTotal2,
  total,
  total2,
  idx,
  counter,
}) => {
  const id = useParams();

  const users = useSelector((state) => state.users.data).filter(
    (item) => item.companyid === id.copid && item[id.id.slice(1)]
  );
  const [line, setline] = useState(0);

  function setLinee() {
    let locale = JSON.parse(localStorage.getItem("Barv2"));
    let counterr = 0;

    if (locale.length > 0) {
      let ar = [];
      for (let i of Object.values(locale[idx])) {
        ar.push(Object.values(i).flat(1));
      }

      if (idx === 0) {
        total = ar.flat(1).reduce((a, b) => a + b);
       return Math.round(total / ar.flat(1).length)
      } else if (idx === 1) {
        total2 = ar.flat(1).reduce((a, b) => a + b);
        return Math.round(total2 / ar.flat(1).length)
      }
    }
  }

  return (
    <div className="h-[24px] flex w-full">
      <>
        <div
          style={{
            width: `${setLinee() === 0 ? setLinee() + 1 : setLinee()}%`,
            backgroundColor: `${color}`,
          }}
          className="flex w-full h-full"
        ></div>
        <p>{setLinee()}%</p>
      </>
    </div>
  );
};

export default BarV2;
