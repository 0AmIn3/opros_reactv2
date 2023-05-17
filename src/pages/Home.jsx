import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AnswersLinks from "../components/AnswersLinks";

const Home = () => {
  const auth_status = Cookies.get("userid");
  if (!auth_status) {
    window.location.href = "/";
  }
  const all = useSelector((state) => state.all.data);
  const logAll = useSelector((state) => state.all.status);

  const [questionsMask, setquestionsMask] = useState([]);
  const answers = useSelector((state) => state.answers.data);
  // const [questions, setquestions] = useState(IoReload());
  function IoReload() {
    if (logAll == "fulfilled" && all.length > 0) {
      setquestionsMask([
        ...all.filter((item) => item.id == auth_status)[0].questions,
      ]);
    }
  }

  useEffect(() => {
  });

  const handleClick = (btn) => {
    const links = document.querySelectorAll(".links");
    links[btn.getAttribute("data-btn")].style.display = "flex";
  };

  return (
    <div className="flex justify-center mt-[200px] relative bg-white h-auto flex-col w-full items-center home_ans">
      <Link to={"/"}>
        <div className="absolute right-[30px] top-[20px] close_btn">
          <IoCloseSharp />
        </div>
      </Link>

      {/* <div className="borders">
        <button
          className="w-full p-3 bg-[#C7FFAC] rounded-md font-medium outline-none   button"
          data-btn="0"
          onClick={(e) => handleClick(e.target)}
        >
          Провести диагностику <br /> целостности
        </button>

        <div className="links" style={{ display: "none" }}>
          <Link to={"/sdflk24234"}>
            <h3>Прохождение диагностики</h3>
          </Link>
          <Link to={"/psdflk24234"}>
            <h3>Отчет по диагностике</h3>
          </Link>
        </div>
      </div>
      <div className="borders">
        <button
          className="w-full p-3 bg-[#C7FFAC] rounded-md font-medium outline-none  button"
          data-btn="1"
          onClick={(e) => handleClick(e.target)}
        >
          Тест для первого яруса
        </button>

        <div className="links" style={{ display: "none" }}>
          <Link to={"/jkjoisdflk24234"}>
            <h3>Прохождение диагностики</h3>
          </Link>
          <Link to={"/pjkjoisdflk24234"}>
            <h3>Отчет по диагностике</h3>
          </Link>
        </div>
      </div>
      <div className="borders">
        <button
          className="w-full p-3 bg-[#C7FFAC] rounded-md font-medium outline-none  button"
          data-btn="2"
          onClick={(e) => handleClick(e.target)}
        >
          Тест для второго яруса
        </button>

        <div className="links" style={{ display: "none" }}>
          <Link to={"/wer23"}>
            <h3>Прохождение диагностики</h3>
          </Link>
          <Link to={"/pwer23"}>
            <h3>Отчет по диагностике</h3>
          </Link>
        </div>
      </div> */}

      {questionsMask.length > 0
        ? questionsMask.map((item, idx) => (
            <AnswersLinks
              key={idx}
              idx={idx}
              item={item}
              handleClick={handleClick}
            />
          ))
        : IoReload()}
    </div>
  );
};

export default Home;
