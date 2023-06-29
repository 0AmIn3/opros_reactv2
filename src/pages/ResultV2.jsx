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
  const users = useSelector((state) => state.users.data);

  const [colors, setColors] = useState([
    "#7f077f",
    "red",
    "royalblue",
    "#F07427",
    "#07b55e",
    // "#07b55e",
  ]);

  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const [answers, setanswers] = useState([]);
  const log = useSelector((state) => state.users.status);
  const logAll = useSelector((state) => state.all.status);
  const [quest, setQuest] = useState([]);

  let defe = [];

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
                  type={"type2"}
                />
              ))
            : getAnincArr()}
        </div>

        {Load && LoadQ
          ? quest.map((item, idx) => (
              <DiogramUp
                item={item}
                peoples={peoples}
                setPeoples={setPeoples}
                nowq={idx}
                opr={answers}
                key={idx}
                defe={defe}
                newObjTot={newObjTot}
                setObjTot={setObjTot}
                type={'type2'}  
              />
            ))
          : getAnincArr()}
        {}
      </div>
    </>
  );
};

export default ResultV2;
