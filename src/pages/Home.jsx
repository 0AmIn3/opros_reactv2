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
  const [Modal, setModal] = useState(false);
  const [Href, setHref] = useState('');
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

      {Modal ? (
        <div className="">
          <div className=" h-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white modalHome flex px-6  py-20 justify-center">
            <div onClick={() => {
              setModal(false)
            }} className="absolute right-[30px] top-[20px] close_btn">
              <IoCloseSharp />
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xl font-bold text-center">Ссылка для отправки вашим респондентам отправлена вам на почту</p>
            <p className="text-xl mt-12 font-bold">Отправьте ссылку вашим респондентам: </p>
            <p className=" text-gray-500 ">{Href}</p>
            </div>
          </div>
          <div className="modalHomeBg"></div>
        </div>
      ) : null}

      {questionsMask.length > 0
        ? questionsMask.map((item, idx) => (
            <AnswersLinks key={idx} idx={idx} setHref={setHref} setModal={setModal} item={item} />
          ))
        : IoReload()}
    </div>
  );
};

export default Home;
