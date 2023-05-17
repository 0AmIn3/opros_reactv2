import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Bar from "../components/Bar";
import DiogramUp from "../components/DiogramUp";

const ResultV2 = () => {
  const all = useSelector((state) => state.all.data);
  const [ids, setIds] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const myid = Cookies.get("userid");
  const users = useSelector((state) => state.users.data)

  const [colors, setColors] = useState([
    "#7f077f",
    "red",
    "royalblue",
    "#9c9c01",
    "#07b55e",
    "black",
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
  ];

  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  const qw = answers.filter((item) => item.resultid == id.id);
  const [quest, setQuest] = useState(questDef);

  function dwdwa() {
    const auth_status = Cookies.get("userid");
    if (logAll === "fulfilled" && log === "fulfilled") {
    setPeoples(users.filter(item => item[`${all.filter(item=> item.id === id.copid)[0].questions.filter((item) => item.resultid == id.id)[0].id}`]));
    setUser(...users.filter((item) => item.companyid == auth_status));
    setQuest(all.filter(item=> item.id === id.copid)[0].questions.filter((item) => item.resultid == id.id)[0].DefAnswers);

      setLoad(true);
      setLoadQ(true);
    }
  }



  return (
    <>
      <div className="answers  relative bg-white">
 
        <h1>Доминирующие цвета</h1>
        <div className=" mt-3">
          {Load && LoadQ
            ? colors.map((item, idx) => (
                <Bar
                  item={item}
                  newObjTot={newObjTot}
                  key={idx}
                  idx={idx}
                  color={colors[idx]}
                />
              ))
            : dwdwa()}
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
              />
            ))
          : dwdwa()}
        {}
      </div>
    </>
  );
};

export default ResultV2;
