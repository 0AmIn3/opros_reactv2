import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bar from "../components/Bar";
import DiogramUp from "../components/DiogramUp";
import BarV2 from "../components/BarV2";

const ResultV3 = () => {
  const all = useSelector((state) => state.all.data);
  const auth_status = Cookies.get("userid");
  const [id, setId] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const [newOb, setOb] = useState([ ]);
  console.log(newOb);
  const [colors, setColors] = useState([
    "#FEF445",
    "#12CDD4",
   
  ]);

  const questDef = [
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?1",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?2",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?3",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?4",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?5",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?6",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
  ];
  const [quest, setQuest] = useState(questDef);

  useEffect(() => {

    if (!user && !peoples.length > 0) {
      setPeoples([...all.filter((item) => item.a3.length > 0)]);
      setUser(...all.filter((item) => item.id == auth_status));
    } else {
      setId(true);
      
    }
  });

  return (
    <>
      <div className="answers  relative bg-white">
        <Link to={"/home"}>
          <div className="absolute right-[30px] top-[20px] close_btn">
            <IoCloseSharp />
          </div>
        </Link>
        <h1>Доминирующие цвета</h1>
        <div className=" mt-3">
          {id
            ? colors.map((item, idx) => (
                <BarV2 item={item} newOb= {newOb} key={idx} idx={idx} color={colors[idx]} />
              ))
            : null}
        </div>

        {quest.map((item, idx) => (
          <DiogramUp
            item={item}
            peoples={peoples}
            setPeoples={setPeoples}
            nowq={idx}
            opr="a3"
            key={idx}
            setObjTot = {setObjTot}
            setOb={setOb}
          />
        ))}
        {}
      </div>
    </>
  );
};

export default ResultV3;