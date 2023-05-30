import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/CompanySlice";
import { IoCloseSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Yarus_v2 from "../components/Yarus_v2";
import Cookies from "js-cookie";
import axios from "axios";
import { postUserAPI } from "../features/thunk";
import { v4 as uuidv4 } from "uuid";
const AnswersV1 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
  const [Load, setLoad] = useState(false);
  const id = useParams();
  const [passed, setPassed] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem(`${id.copid}`) === 'passed'){
      setPassed(true)
    }else{
      setPassed(false)
  
    }
  })

  const userKey = useSelector((state) => state.all.userKey);
  const users = useSelector((state) => state.all.data);
  const questDef = [];
  const logAll = useSelector((state) => state.all.status);
  const auth_status = Cookies.get("userid");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [d, setd] = useState([...questDef]);
  const companyQw = users.filter(item => item.id === id.copid)[0].questions.filter((item) => item.id == id.id)[0].DefAnswers
  const [quest, setQuest] = useState(d);



  
  function loadal() {
    if (logAll == "fulfilled") {
      localStorage.setItem(`${id.copid}/${id.id}`, JSON.stringify(companyQw));

      setLoad(true);
    }
    if (localStorage.getItem(`${id.copid}/${id.id}`)) {
      setQuest(JSON.parse(localStorage.getItem(`${id.copid}/${id.id}`)));
    }
  }
  useEffect(() => {
  }, [Load]);

  return (
    <>
    {
      passed ? (
        <div className="answers relative pt-[100px] flex items-center justify-center bg-white">
          <h1 className=" text-4xl">Опрос пройден.</h1>
        </div>
      ) : (
        <div className="answers relative pt-[100px] bg-white">
        {Load ? (
          <Yarus_v2
            quest={quest}
            nowq={nowq}
            setQuest={setQuest}
            key={nowq}
          />
        ) : (
          loadal()
        )}

        <button
          className="next_btn flex items-center"
          type="submit"
          onClick={() => {
            const er_btn = document.querySelector(".er_q");
            if (
              quest[nowq].answers.filter((item) => item?.ansucc === true)
                .length > 0
            ) {
              er_btn.style.display = "none";

              if (nowq <= quest.length - 1) {

                if (nowq < quest.length - 1) {
                  setNowq(nowq + 1);
                } else if (nowq === quest.length - 1) {

                  let ob = {};
                  ob[`${id.id}`] = quest;
                  dispatch(
                    postUserAPI({
                      companyid: auth_status,
                      
                      id: uuidv4(),
                      ...ob
                    })
                  );
                  localStorage.setItem(`${id.copid}`, "passed");
                    setPassed(true)
                }
              }
            } else {
              er_btn.style.display = "block";
            }
          }}
        >
          <p>Следующий вопрос</p>
          <SlArrowRight />
        </button>
      </div>
      )
    }


       
    </>
  );
};

export default AnswersV1;
