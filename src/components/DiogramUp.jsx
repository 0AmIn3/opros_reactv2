import React from "react";
import UpDiogramItem from "./UpDiogramItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DiogramUp = ({
  item,
  opr,
  nowq,
  peoples,
  setObjTot,
  setOb,
  newObjTot,
  defe,
  type
}) => {
  const id = useParams();

  const all = useSelector((state) => state.all.data)
    .filter((item) => item.id == id.copid)[0]
    .questions.filter((item) => item.resultid == id.id)[0].DefAnswers;
  const users = useSelector((state) => state.users.data).filter(
    (item) => item.companyid === id.copid && item[opr]
  );
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

    if (users.length > 0) {
      for (let i of users) {
        for (let a of i[opr][nowq].answers) {
          if (a.ansucc) {
            obj[a.title]++;

            al.push(a);
          }
        }
      }

      setNewobj(Object.values(obj));

  
    }
    let objtot = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    };
   
    for (let b of users) {
      for (let s of b[opr][nowq].answers) {
        if (s.ansucc) {
          if (s.title == 0) {
            objtot[s.title].push(0);
          } else if (s.title == 1) {
            objtot[s.title].push(20);
          } else if (s.title == 2) {
            objtot[s.title].push(40);
          } else if (s.title == 3) {
            objtot[s.title].push(60);
          } else if (s.title == 4) {
            objtot[s.title].push(80);
          } else if (s.title == 5) {
            objtot[s.title].push(100);
          }
        }
      }
    }

    if(type === 'type2'){
      if (defe.length <= 4) {
        defe.push(objtot);
        setObjTot([...defe]);
      }
    }
    if(type === 'type3'){
      if (defe.length <= 5) {
        defe.push(objtot);
        setOb([[...Object.values(defe).slice(0,3)] ,[...Object.values(defe).slice(3)]])
      }
    }

   


  }

  useEffect(() => {
    changes();
  }, []);

  return (
    <>
      <div className="mt-[60px]">
        <h1 className="w-[70%] text-2xl  font-extrabold">{item.title}</h1>
        <p className=" mt-[18px] text-sm opacity-30">
          Ответили {users.length} человек
        </p>
        <div className="flex gap-3 mt-[12px] ">
          {newobj.map((item, idx) => (
            <UpDiogramItem key={idx} item={item} peoples={users.length} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DiogramUp;
