import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnswersLinks from "../components/AnswersLinks";
import SendEmail from "../components/SendEmail";
import { useRef } from "react";
import { set } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Home = () => {
  const { copid } = useParams();
  const IsCompany = Cookies.get("IsCompany");
  const IsUser = Cookies.get("IsUser");
  const all = useSelector((state) => state.all.data);
  const logAll = useSelector((state) => state.all.status);
  const [Company, setCompany] = useState([]);
  const [questionsMask, setquestionsMask] = useState([]);
  const [Modal, setModal] = useState(false);
  const [Href, setHref] = useState("");
  const [CopyText, setCopyText] = useState("Копировать ссылку");
  const navigate = useNavigate();
  function IoReload() {
    if (logAll == "fulfilled" && all.length > 0) {
      setquestionsMask([
        ...all.filter((item) => item.id == copid)[0].questions,
      ]);
      setCompany(all.filter((item) => item.id == copid)[0]);
    }
  }

  const textRef = useRef(null);
  const textToCopy = textRef.current ? textRef.current.innerHTML : "";
  const handleCopy = () => {
    if (textRef.current) {
      let textToCopy = textRef.current.innerHTML;
      navigator.clipboard.writeText(textToCopy);
    }
  };

  if (IsUser == "true") {
    return (
      <>
        <div className="container"></div>
        <div className="bgall"></div>
        <div className="bgopa"></div>
        <div className="reg_box  flex items-center justify-center">
          <h1> 404 Page in not found</h1>
        </div>
      </>
    );
  } else if (IsCompany == "true") {
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
              <div
                onClick={() => {
                  setModal(false);
                }}
                className="absolute right-[30px] top-[20px] close_btn"
              >
                <IoCloseSharp />
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl font-bold text-center">
                  Ссылка на опрос у вас на почте.
                </p>
                <p className="text-xl mt-12 font-bold">
                  Отправьте ссылку вашим респондентам:{" "}
                </p>
                <p ref={textRef} className="text-gray-500">
                  {Href}
                </p>
                <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                  <button
                    className=" p-3 bg-[#77dddf] rounded-md font-medium outline-none   "
                    onClick={() => {
                      setCopyText("Ссылка скопирована");
                      setTimeout(() => {
                        setCopyText("Копировать ссылку");
                      }, 2000);
                    }}
                  >
                    {CopyText}
                  </button>
                </CopyToClipboard>
                {/* <p ref={textRef} className=" text-gray-500 ">
                  {Href}
                </p> */}
                {/* <button
                  className=" p-3 bg-[#77dddf] rounded-md font-medium outline-none   "
                  onClick={() => {
                    // copyText();
                    setCopyText("Ссылка скопирована");
                    setTimeout(() => {
                      setCopyText("Копировать ссылку");
                    }, 2000);
                  }}
                >
                  {CopyText}
                </button> */}
              </div>
            </div>
            <div className="modalHomeBg"></div>
          </div>
        ) : null}

        {questionsMask.length > 0
          ? questionsMask.map((item, idx) => (
              <AnswersLinks
                key={idx}
                idx={idx}
                setHref={setHref}
                setModal={setModal}
                item={item}
              />
            ))
          : IoReload()}
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Home;
