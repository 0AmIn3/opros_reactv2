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
  const [colors, setColors] = useState([
    "#747BC0",
    "#FF00BB",
    "#FF6600",
    "#FFA600",
    "#FFCF00",
    "#57CF00",
    "#00CCFF",
  ]);
  const questDef = [];
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const [answers, setanswers] = useState([]);
  const log = useSelector((state) => state.users.status);
  const logAll = useSelector((state) => state.all.status);
  const [quest, setQuest] = useState(questDef);
  const [BarTotal, setBarTotal] = useState([]);
  const [PersonalResults, setPersonalResults] = useState("none");

  const FillUsers = peoples.filter((item) => item.companyid === id.copid);
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
  console.log(FillUsers);
  useEffect(() => {
    // Load && LoadQ ? inds(users) : null;
  }, []);
  return (
    <>
      <div className="answers  relative bg-white">
        <h1>
          Процент реализации потребностей в разрезе уровней по пирамиде Маслоу
        </h1>
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

        {Load && LoadQ ? (
          <select
            defaultValue={null}
            className=" bg-[#EDEDED]  outline-none cursor-pointer w-full h-[50px] mt-6 rounded-xl"
            onChange={(e) => {
              setPersonalResults(e.target.value)
            }}
          >
            <option className=" cursor-pointer" value={"none"} id={0}>
              Выберите пользователя
            </option>
            {FillUsers.map((item, idx) => (
              <option className=" cursor-pointer" value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          getAnincArr()
        )}
        {PersonalResults !== "none"
          ? colors.map((item, idx) => (
              <BarV3
                item={item}
                peoples={peoples.filter(item=> item.id === PersonalResults)}
                newOb={newOb}
                key={idx}
                idx={idx}
                color={colors[idx]}
              />
            ))
          : null}
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
