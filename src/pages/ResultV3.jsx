import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Bar from "../components/Bar";
import DiogramUp from "../components/DiogramUp";
import BarV2 from "../components/BarV2";

const ResultV3 = () => {
  const all = useSelector((state) => state.all.data);
  const auth_status = Cookies.get("userid");
  // const [id, setId] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const [newOb, setOb] = useState([]);
  console.log(newOb);
  const [colors, setColors] = useState(["#FEF445", "#12CDD4"]);
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
  ];
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  // const qw = answers.filter((item) => item.resultid == id.id);
  const [quest, setQuest] = useState(questDef);

  function dwdwa() {
    const auth_status = Cookies.get("userid");
    if (logAll == "fulfilled" && log == "fulfilled") {
      setPeoples(
        all.filter(
          (item) =>
            item[`${answers.filter((item) => item.resultid == id.id)[0].id}`]
        )
      );
      setUser(...all.filter((item) => item.id == auth_status));
      setQuest(answers.filter((item) => item.resultid == id.id)[0].DefAnswers);

      setLoad(true);
      setLoadQ(true);
    }
  }
  console.log(quest);
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
          {/* {Load && LoadQ
            ? colors.map((item, idx) => (
                <BarV2
                  item={item}
                  newOb={newOb}
                  key={idx}
                  idx={idx}
                  color={colors[idx]}
                />
              ))
            : dwdwa()} */}
        </div>

        {Load && LoadQ
          ? quest.map((item, idx) => (
              <DiogramUp
                item={item}
                peoples={peoples}
                setPeoples={setPeoples}
                nowq={idx}
                opr={answers.filter((item) => item.resultid == id.id)[0].id}
                key={idx}
                setObjTot={setObjTot}
                setOb={setOb}
              />
            ))
          : dwdwa()}
        {}
      </div>
    </>
  );
};

export default ResultV3;
