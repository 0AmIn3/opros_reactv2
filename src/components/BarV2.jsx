import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BarV2 = ({ color, OneBar, TwoBar, idx }) => {
  const id = useParams();

  const users = useSelector((state) => state.users.data).filter(
    (item) => item.companyid === id.copid && item[id.id.slice(1)]
  );
  const [line, setline] = useState(0);

  function setLinee() {
    if (idx == 0) {
      return OneBar;
    }else if(idx == 1){
      return TwoBar;
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
