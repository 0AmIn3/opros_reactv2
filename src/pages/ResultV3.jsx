import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BarV2 from "../components/BarV2";
import ResAns from "../components/ResAns";

const ResultV3 = () => {
  const all = useSelector((state) => state.all.data);
  const myid = Cookies.get("userid");
  // const [id, setId] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const [newOb, setOb] = useState([]);
  const users = useSelector((state) => state.users.data);
  const [colors, setColors] = useState(["#FEF445", "#12CDD4", "gray  "]);
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
  const [answers, setanswers] = useState([]);
  const log = useSelector((state) => state.users.status);
  const logAll = useSelector((state) => state.all.status);
  const [quest, setQuest] = useState(questDef);
  const [BarTotal, setBarTotal] = useState([]);

  function getAnincArr() {
    const auth_status = Cookies.get("userid");
    if (logAll === "fulfilled" && log === "fulfilled") {
      setPeoples(
        users.filter(
          (item) =>
            item[
              `${
                all
                  .filter((item) => item.id === id.copid)[0]
                  .questions.filter((item) => item.resultid == id.id)[0].id
              }`
            ]
        )
      );
      setUser(...users.filter((item) => item.companyid == id.copid));
      setQuest(
        all
          .filter((item) => item.id === id.copid)[0]
          .questions.filter((item) => item.resultid == id.id)[0].DefAnswers
      );
      setanswers(
        all
          .filter((item) => item.id === id.copid)[0]
          .questions.filter((item) => item.resultid == id.id)[0].id
      );
      setLoad(true);
      setLoadQ(true);
    }
  }

  function inds(arr) {
    let one = 0;
    let two = 0;
    let three = 0;
    let total = [];
    let Allusers = arr.filter(
      (item) => item.companyid == id.copid && item[id.id.slice(1)]
    );
    let ans = [];
    for (let item of Allusers) {
      for (let i of item[id.id.slice(1)]) {
        ans.push(i);
      }
    }
    for (let i of ans) {
      for (let succ of i.answers) {
        if (succ.ansucc) {
          let idx = i.answers.indexOf(succ);
          if (idx == 0) {
            one += 1;
          } else if (idx == 1) {
            two += 1;
          } else if (idx == 2) {
            three += 1;
          }
        }
      }
    }
    total = [
      Math.round((one / (Allusers.length * 6)) * 100),
      Math.round((two / (Allusers.length * 6)) * 100),
      Math.round((three / (Allusers.length * 6)) * 100),
    ];
    setBarTotal([...total])

  }
  useEffect(() => {
    Load && LoadQ ? inds(users) : null;
  });
  return (
    <>
      <div className="answers  relative bg-white">
        <h1>Доминирующие цвета</h1>
        <div className=" mt-3">
          {Load && LoadQ
            ? colors.map((item, idx) => (
                <BarV2
                  item={item}
                  BarTotal={BarTotal}
                  newOb={newOb}
              
                  key={idx}
                  idx={idx}
                  color={colors[idx]}
                />
              ))
            : getAnincArr()}
        </div>

        {Load && LoadQ
          ? quest.map((item, idx) => (
              <ResAns
                qus={item}
                all={peoples}
                idkey={answers}
                key={idx}
                index={idx}
              />
            ))
          : getAnincArr()}
        {}
      </div>
    </>
  );
};

export default ResultV3;
