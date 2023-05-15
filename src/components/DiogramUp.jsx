import React from "react";
import UpDiogramItem from "./UpDiogramItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const DiogramUp = ({ item, opr, nowq, peoples, setObjTot , setOb }) => {

  const questUser = useSelector((state) => state.all?.data);
  const [newobj, setNewobj] = useState([]);

  function changes() {
    let al = [];
    let obj = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    let objtot = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    if (peoples.length > 0) {
      for (let i of peoples) {
        for (let a of i[opr][nowq].answers) {
          if (a.ansucc) {
            obj[a.title]++;

            al.push(a);
          }
        }

        for (let a of i[opr]) {
          for (let s of a.answers) {
            if (s.ansucc) {
              objtot[s.title]++;

            }
          }
        
        }
      }
      setNewobj(Object.values(obj));
      setObjTot(Object.values(objtot))
      if(opr == 'a3'){
        setOb([[...Object.values(objtot).slice(0,3)] ,[...Object.values(objtot).slice(3)]])
      }
     


    }
  }


  useEffect(() => {
    changes();
  }, [peoples]);

  return (
    <>
      <div className="mt-[60px]">
      <h1 className="w-[70%] text-2xl  font-extrabold">{item.title}</h1>
      <p className=" mt-[18px] text-sm opacity-30">
        Ответили {peoples.length} человек
      </p>
      <div className="flex gap-3 mt-[12px] ">
        {newobj.map((item, idx) => (
          <UpDiogramItem key={idx} item={item} peoples={peoples.length} />
        ))}
      </div>
      </div>
    </>
  );
};

export default DiogramUp;
