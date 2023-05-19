import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import Yarus from "../components/Yarus";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowRight } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { pathCompanyAPI, postUserAPI } from "../features/thunk";
import { v4 as uuidv4 } from "uuid";

const AnswersV2 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
  const [Load, setLoad] = useState(false);
  const userKey = useSelector((state) => state.all.userKey);
  const users = useSelector((state) => state.all.data);
  const id = useParams();
  const [passed, setPassed] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem(`${id.id}`) === 'passed'){
      setPassed(true)
    }else{
      setPassed(false)
  
    }
  })


  const questDef = [
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "0",
          ansucc: false,
        },
        {
          title: "1",
          ansucc: false,
        },
        {
          title: "2",
          ansucc: false,
        },
        {
          title: "3",
          ansucc: false,
        },
        {
          title: "4",
          ansucc: false,
        },
        {
          title: "5",
          ansucc: false,
        },
      ],
    },
  ];
  const logAll = useSelector((state) => state.all.status);
  const [d, setd] = useState([...questDef]);
  const companyQw = users
    .filter((item) => item.id === id.copid)[0]
    .questions.filter((item) => item.id == id.id)[0].DefAnswers;
  const [quest, setQuest] = useState(d);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function loadal() {
    if (logAll == "fulfilled") {
      localStorage.setItem(`${id.copid}/${id.id}`, JSON.stringify(companyQw));

      setLoad(true);
    }
    if (localStorage.getItem(`${id.copid}/${id.id}`)) {
      setQuest(JSON.parse(localStorage.getItem(`${id.copid}/${id.id}`)));
    }
  }
  const auth_status = Cookies.get("userid");

  return (
    <>
      {passed ? (
        <div className="answers relative pt-[100px] flex items-center justify-center bg-white">
          <h1 className=" text-4xl">Опрос пройден.</h1>
        </div>
      ) : (
        <div className="answers relative pt-[100px] bg-white">
          {Load ? (
            <Yarus
              setQuest={setQuest}
              opr={id.id}
              quest={quest}
              nowq={nowq}
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
                        ...ob,
                      })
                    );
                    localStorage.setItem(`${id.id}`, "passed");
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
      )}
    </>
  );
};

export default AnswersV2;
