import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BarV2 from "../components/BarV2";
import ResAns from "../components/ResAns";
import BarV3 from "../components/BarV3";
import Chart from "../components/Chart";

const ResultV5 = () => {
  const all = useSelector((state) => state.all.data);
  const myid = Cookies.get("userid");
  // const [id, setId] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const [newOb, setOb] = useState([]);
  const users = useSelector((state) => state.users.data);
  const questDef = [];
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const [answers, setanswers] = useState([]);
  const log = useSelector((state) => state.users.status);
  const logAll = useSelector((state) => state.all.status);
  const [quest, setQuest] = useState(questDef);
  const [BarTotal, setBarTotal] = useState([]);
  const FillUsers = peoples.filter((item) => item.companyid === id.copid);
  // const [WhiteSide, setWhiteSide] = useState(0);
  // const [WhiteSideLabel, setWhiteSideLabel] = useState([]);
  // const [DarkSide, setDarkSide] = useState(0);
  // const [DarkSideLabel, setDarkSideLabel] = useState([]);
  const [BarResults, setBarResults] = useState([]);
  const [BarLabels, setBarLabels] = useState([]);
  const [Colors, setColors] = useState([]);
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
  const calculatePercentage = (numbers , side) => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const percentages = numbers.map(
      (num) => `${((num / sum) * 100).toFixed(2)}% ${side}`
    );
    return percentages;
  };
  function inds(arr) {
    let white = [];
    let dark = [];
    const uniqueColors = (data) => {
      const colors = data.map((item) => item.color);
      const uniqueColors = Array.from(new Set(colors));

      return uniqueColors;
    };
    let colors = uniqueColors(arr[0][id.id.slice(1)]);
    for (let i of arr) {
      for (let ques of i[id.id.slice(1)]) {
        if (ques.side) {
          white.push(ques);
        } else {
          dark.push(ques);
        }
      }
    }

    function changeColor(colors, arr) {
      // console.log(arr);
      let obj = {};
      let TotalArr = [];
      for (let col of colors) {
        obj[col] = [];
        let total = 0;
        for (let i of arr) {
          if (i.color == col) {
            obj[col].push(i);
          }
        }
        for (let i of obj[col]) {
          for (let ans of i.answers) {
            if (ans.ansucc) {
              if (ans.idx === 0) {
                total += 1;
              } else if (ans.idx === 1) {
                total += 0.5;
              } else if (ans.idx === 2) {
                total += 0;
              }
            }
          }
        }
        TotalArr.push(total);
      }

      return TotalArr;
    }

    function changeTotal(arr) {
      let total = 0;
      for (let i of arr) {
        for (let ans of i.answers) {
          if (ans.ansucc) {
            if (ans.idx === 0) {
              total += 1;
            } else if (ans.idx === 1) {
              total += 0.5;
            } else if (ans.idx === 2) {
              total += 0;
            }
          }
        }
      }
      return (total / arr.length) * 100;
    }

    // setWhiteSide(changeColor(colors, white));
    // setDarkSide(changeColor(colors, dark));
    setBarResults([...changeColor(colors, white), ...changeColor(colors, dark)]);
    let w = calculatePercentage(changeColor(colors, white) ,  "Светлая сторона")
    let d = calculatePercentage(changeColor(colors, dark) ,  "Темная сторона")
    setBarLabels(
      [...w , ...d]
    );

    // setWhiteSideLabel(calculatePercentage(changeColor(colors, white)));
    // setDarkSideLabel(calculatePercentage(changeColor(colors, dark)));
    setColors(colors);
  }

  useEffect(() => {
    Load && LoadQ ? inds(FillUsers) : null;
  }, []);
  return (
    <>
      <div className="answers  relative bg-white">
        <h1>
          Результат диагностики проявления цветов первого яруса в организации
        </h1>
        <div className=" mt-3 mx-auto  w-fit flex ">
          {Load && LoadQ ? (
            <>
              <Chart
                // sideW={WhiteSide}
                // sideD={DarkSide}
                Colors={Colors}
                // CopSideW={WhiteSideLabel}
                // CopSideD={DarkSideLabel}
                // whatside={"Светлая сторона"}
                // bool={true}
                BarResults={BarResults}
                BarLabels={BarLabels}
              />
            </>
          ) : (
            getAnincArr()
          )}
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

export default ResultV5;
