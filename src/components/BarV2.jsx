import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BarV2 = ({ color, item, newOb, idx }) => {


  const id = useParams();

  const users = useSelector((state) => state.users.data).filter(
    (item) => item.companyid === id.copid && item[id.id.slice(1)]
  );
  const [line, setline] = useState(0);

  function setLinee() {
    if (newOb.length > 0) {
      
      for(let i of newOb[idx]){
        setline(line +
          Object.values(i).flat(1)[0]
        );
      }
    
    }
  }

  return (
    <div className="h-[24px] flex w-full">
      {line > 0 ? 
        <>
          <div
            style={{
              width: `${line === 0 ? line + 1 : line}%`,
              backgroundColor: `${color}`,
            }}
            className="flex w-full h-full"
          ></div>
          <p>{line}%</p>
        </>
      : 
        setLinee()
      }
    </div>
  );
};

export default BarV2;
