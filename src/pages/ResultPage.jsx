import React, { useState } from "react";
import ResultV3 from "./ResultV3";
import ResultV2 from "./ResultV2";
import ResultV1 from "./ResultV1";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const [type, settype] = useState("");
  const [Load, setLoad] = useState(false);
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  function reload() {
    if (logAll == "fulfilled" && log == "fulfilled") {
      setLoad(true);
    }
  }

  function Type() {
    let typ = answers.filter((item) => item.resultid == id.id)[0].type;
    console.log(typ);
    if (typ === "type1") {
      return <ResultV1 />;
    } else if (typ === "type2") {
      return <ResultV2 />;
    } else if (typ === "type3") {
      return <ResultV3 />;
    }
  }

  return <div>{Load ? Type() : reload()}</div>;
};

export default ResultPage;
