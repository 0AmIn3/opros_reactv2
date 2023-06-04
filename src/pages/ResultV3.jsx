import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Bar from "../components/Bar";
import DiogramUp from "../components/DiogramUp";
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
  const [answers, setanswers] = useState([]);
  const log = useSelector((state) => state.users.status);
  const logAll = useSelector((state) => state.all.status);
  const [quest, setQuest] = useState(questDef);
  const [OneBar, setOneBar] = useState(0);
  const [TwoBar, setTwoBar] = useState(0);

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
      setUser(...users.filter((item) => item.companyid == auth_status));
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
    let one = [];
    let two = [];
    for (let item of arr) {
      one.push(item[id.id.slice(1)].slice(0, 3));
      two.push(item[id.id.slice(1)].slice(3));
    }

    function get(ar) {
      let total = [];

      for (let quest of ar) {
        let answers = [];

        for (let ans of quest) {
          answers.push(ans.answers);
        }
        for (let an of answers) {
          for (let succ of an) {
            if (succ.ansucc) {
              let idx = an.indexOf(succ);
              if (idx == 0) {
                total.push(1);
              } else if (idx == 1) {
                total.push(0.5);
              } else if (idx == 2) {
                total.push(0);
              }
            }
          }
        }
      }
    return  Math.round((total.reduce((a, b) => a + b) / (arr.length * 3)) * 100)
    }
    let onebar = get(one)
    let twobar = get(two)
    setOneBar(onebar)
    setTwoBar(twobar)
  }
  useEffect(() => {
    Load && LoadQ
      ? inds(
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
        )
      : null;
  });
  return (
    <>
      <div className="answers  relative bg-white">
        {/* <Link to={"/" + myid}>
          <div className="absolute right-[30px] top-[20px] close_btn">
            <IoCloseSharp />
          </div>
        </Link> */}
        <h1>Доминирующие цвета</h1>
        <div className=" mt-3">
          {Load && LoadQ
            ? colors.map((item, idx) => (
                <BarV2
                  item={item}
                  newOb={newOb}
              OneBar= {OneBar}
                  TwoBar= {TwoBar}
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
