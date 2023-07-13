import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnswersV1 from "./AnswersV1";
import AnswersV2 from "./AnswersV2";
import AnswersV3 from "./AnswersV3";
import Cookies from "js-cookie";

const AnswersPage = () => {
  const IsCompany = Cookies.get("IsCompany");
  const IsUser = Cookies.get("IsUser");

  !IsCompany ?   Cookies.set("IsUser", `true`, {
    expires: Infinity,
    path: "/",
  }) : null
  const [type, settype] = useState("");
  const id = useParams();
  const all = useSelector((state) => state.all.data);

  const logAll = useSelector((state) => state.all.status);
  const [Load, setLoad] = useState(false);
  function reload() {
    if (logAll == "fulfilled") {
      setLoad(true);
    }
  }
  function Type() {
    let typ = all.filter(item=> item.id === id.copid)[0].questions.filter((item) => item.id == id.id)[0].type;
    if (typ === "type1") {
      return <AnswersV1 />;
    } else if (typ === "type2") {
      return <AnswersV2 />;
    } else if (typ === "type3") {
      return <AnswersV3 />;
    }else if (typ === "type4") {
      return <AnswersV3 />;
    }else if (typ === "type5") {
      return <AnswersV3 />;
    }
  
  }

  return <div>{Load ? Type() : reload()}</div>;
};

export default AnswersPage;
