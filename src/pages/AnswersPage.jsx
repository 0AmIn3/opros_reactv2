import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnswersV1 from "./AnswersV1";
import AnswersV2 from "./AnswersV2";
import AnswersV3 from "./AnswersV3";

const AnswersPage = () => {
  const [type, settype] = useState("");
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  console.log();
  const [Load, setLoad] = useState(false);
  function reload() {
    if (logAll == "fulfilled" && log == "fulfilled") {
      setLoad(true);
    }
  }
  function Type() {
    let typ = answers.filter(item=> item.id == id.id)[0].type;
    // console.log(typ);
    if (typ === "type1") {
      return <AnswersV1 />;
    } else if (typ === "type2") {
      return <AnswersV2 />;
    } else if (typ === "type3") {
      return <AnswersV3 />;
    }
  
  }

  return <div>{Load ? Type() : reload()}</div>;
};

export default AnswersPage;
