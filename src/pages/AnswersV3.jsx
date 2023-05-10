import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import Yarus from "../components/Yarus";
import { useDispatch, useSelector } from "react-redux";
import { changeOpros } from "../features/goods/allSlice";
import { SlArrowRight } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";

const AnswersV3 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
  const questUser = useSelector((state) => state.all?.data[0]?.a3);
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
  const [quest, setQuest] = useState(questDef);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(questUser.length === 0){
  //     setQuest(questDef)
  //   }else{
  //     setQuest(questUser)
  //   }
  // })

  return (
    <>
      <div className="answers relative pt-[100px] bg-white">
        <Link to={"/home"}>
          <div className="absolute right-[30px] top-[20px] close_btn">
            <IoCloseSharp />
          </div>
        </Link>
        <div className="q_now">
          {/* <span className=" bg-[#C7FFAC]">{nowq + 1} вопрос </span>из
          {quest.length} */}
        </div>

        <Yarus
          setQuest={setQuest}
          opr="a3"
          quest={quest}
          nowq={nowq}
          key={nowq}
        />

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
                  // dispatch(changeOpros({ id: 2, arr: quest, opr: "a3" }));
                  navigate("/pwer23");
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
    </>
  );
};

export default AnswersV3;
