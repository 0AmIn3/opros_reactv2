import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AnswersLinks from "../components/AnswersLinks";
import SendEmail from "../components/SendEmail";

const Home = () => {
  const auth_status = Cookies.get("userid");
  if (!auth_status) {
    window.location.href = "/";
  }
  const all = useSelector((state) => state.all.data);
  const logAll = useSelector((state) => state.all.status);
  const [Company, setCompany] = useState([]);
  const [questionsMask, setquestionsMask] = useState([]);
  // const [questions, setquestions] = useState(IoReload());
  function IoReload() {
    if (logAll == "fulfilled" && all.length > 0) {
      setquestionsMask([
        ...all.filter((item) => item.id == auth_status)[0].questions,
      ]);
      setCompany(all.filter((item) => item.id == auth_status)[0]);
    }
  }

  useEffect(() => {});

  // const handleClick = (btn) => {
  //   const links = document.querySelectorAll(".links");
  //   links[btn.getAttribute("data-btn")].style.display = "flex";
  // };

  return (
    <div className="flex justify-center mt-[200px] relative bg-white h-auto flex-col w-full items-center home_ans">
      <Link to={"/"}>
        <div className="absolute right-[30px] top-[20px] close_btn">
          <IoCloseSharp />
        </div>
      </Link>

      {questionsMask.length > 0 ? (
        <SendEmail arr={questionsMask} item={Company} />
      ) : (
        IoReload()
      )}
      {questionsMask.length > 0
        ? questionsMask.map((item, idx) => (
            <AnswersLinks key={idx} idx={idx} item={item} />
          ))
        : IoReload()}
    </div>
  );
};

export default Home;
