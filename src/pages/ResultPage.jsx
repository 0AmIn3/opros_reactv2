import React, { useEffect, useState } from "react";
import ResultV3 from "./ResultV3";
import ResultV2 from "./ResultV2";
import ResultV1 from "./ResultV1";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserAPI } from "../features/thunk";

const ResultPage = () => {
  const [type, settype] = useState("");
  const [Load, setLoad] = useState(false);
  const id = useParams();
  const all = useSelector((state) => state.all.data);
  const users = useSelector((state) => state.users.data)
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  const dispatch = useDispatch();
  function reload() {
    if (logAll == "fulfilled" && log == "fulfilled") {
      setLoad(true);
    }
  }

  useEffect(()=>{
    if(!users.length) {
			dispatch(getUserAPI())
		}

    })


  function Type() {
    let typ = all.filter(item=> item.id === id.copid)[0].questions.filter((item) => item.resultid == id.id)[0].type;
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
