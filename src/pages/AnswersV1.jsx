import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/allSlice";
import { IoCloseSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Yarus_v2 from "../components/Yarus_v2";
import Cookies from "js-cookie";
import { pathUsersAPI } from "../features/thunk";

const AnswersV1 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
  const [Load, setLoad] = useState(false);
  const id = useParams()
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);

  const auth_status = Cookies.get("userid");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qw = answers.filter(item => item.id == id.id)
  const [quest, setQuest] = useState([]);
  useEffect(()=>{
    if(log == 'fulfilled'){
      setLoad(true)
      setQuest(qw[0].DefAnswers)
    }
  })


  return (
    <>
      <>
        <div className="answers relative pt-[100px] bg-white">
          <Link to={"/home"}>
            <div className="absolute right-[30px] top-[20px] close_btn">
              <IoCloseSharp />
            </div>
          </Link>

          {
            Load ? <Yarus_v2 quest={quest} nowq={nowq} setQuest={setQuest} key={nowq} /> : null
          }

          <button
            className="next_btn flex items-center"
            type="submit"
            onClick={() => {
              console.log(quest);
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
                    console.log(quest);
                    dispatch(
                      pathUsersAPI({ id: auth_status, obj: { a1: quest } })
                    );
                    // navigate("/psdflk24234");
                    setTimeout(() => {
                      window.location.href = "/psdflk24234";
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
    </>
  );
};

export default AnswersV1;
