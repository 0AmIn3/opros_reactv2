import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import Yarus from "../components/Yarus";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowRight } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { pathUsersAPI } from "../features/thunk";

const AnswersV3 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
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
  const dispatch = useDispatch();
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const [d, setd] = useState([...questDef]);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  const qw = answers.filter((item) => item.id == id.id);
  const [quest, setQuest] = useState(d);

  function loadal(){
    if (log == "fulfilled") {
      // console.log(answers);

      localStorage.setItem(`${id.id}` , JSON.stringify(qw[0].DefAnswers))

     
      setLoad(true);
    }
    if(localStorage.getItem(`${id.id}`)){
      setQuest(JSON.parse(localStorage.getItem(`${id.id}`)))
    }
  }
  // useEffect(()=>{
  //   if(questUser.length === 0){
  //     setQuest(questDef)
  //   }else{
  //     setQuest(questUser)
  //   }
  // })
  const auth_status = Cookies.get("userid");

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
        {Load  ?   <Yarus
          setQuest={setQuest}
          opr={id.id}
          quest={quest}
          nowq={nowq}
          key={nowq}
        /> : loadal()}
      

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
                  dispatch(pathUsersAPI({ id: auth_status, obj: ob }));
                  setTimeout(() => {
                    window.location.href =
                      "/socialpollresult/" + qw[0].resultid;
                  }, 300);
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
