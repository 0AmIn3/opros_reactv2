import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BarV2 from "../components/BarV2";
import ResAns from "../components/ResAns";
import BarV3 from "../components/BarV3";

const ResultV4 = () => {
  const all = useSelector((state) => state.all.data);
  const myid = Cookies.get("userid");
  // const [id, setId] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [newObjTot, setObjTot] = useState([]);
  const [newOb, setOb] = useState([]);
  const users = useSelector((state) => state.users.data);
  const [colors, setColors] = useState(["#747BC0", "#FF00BB", "#FF6600", "#FFA600" , "#FFCF00" , "#57CF00" , "#00CCFF"]);
  const questDef = [];
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

  useEffect(() => {
    // Load && LoadQ ? inds(users) : null;
    console.log(peoples);
  }, []);
  return (
    <>
      <div className="answers  relative bg-white">
        <h1>Доминирующие цвета</h1>
        <div className=" mt-3">
          {Load && LoadQ
            ? colors.map((item, idx) => (
                <BarV3
                  item={item}
                  peoples={peoples}
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

export default ResultV4;
