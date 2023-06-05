import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestMain from "../components/QuestMain";
import Yarus from "../components/Yarus";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowRight } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { pathCompanyAPI, pathUserAPI, postUserAPI } from "../features/thunk";
import { v4 as uuidv4 } from "uuid";
import Yarus_v2 from "../components/Yarus_v2";

const AnswersV3 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0);
  const ChangedUsers = useSelector((state) => state.users.data);
  const ChangedUserskeys = useSelector((state) => state.users.userKey);
  const ChangedUsersStatus = useSelector((state) => state.users.status);
  const userKey = useSelector((state) => state.all.userKey);
  const users = useSelector((state) => state.all.data);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();

  const [passed, setPassed] = useState(false);

  useEffect(()=>{
   
    if(localStorage.getItem(`${id.copid}/${id.id}1`) === 'passed' && localStorage.getItem(`${id.copid}/${id.id}/userID`) !== null){
      setPassed(true)
    }else{
      setPassed(false)
  
    }
  })
  const [d, setd] = useState([]);
  const logAll = useSelector((state) => state.all.status);
  const companyQw = users
    .filter((item) => item.id === id.copid)[0]
    .questions.filter((item) => item.id == id.id)[0].DefAnswers;

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

  const auth_status = Cookies.get("userid");

  return (
    <>
      {passed ? (
             <div className="answers relative pt-[100px] flex gap-6   flex-col items-center justify-center bg-white">
             <h1 className=" text-4xl">Опрос пройден.</h1>
             {/* <button onClick={()=>{
               localStorage.setItem(`${id.copid}/${id.id}1` , 'repeat')
               window.location.reload(false);
             }} className="p-3 bg-[#C7FFAC] rounded-md font-medium outline-none">Повторно пройти опрос</button> */}
          
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
                    if(!localStorage.getItem(`${id.copid}/${id.id}/userID`)){
                      let usersObj ={
                        companyid: id.copid,
                        id: uuidv4(),
                        ...ob,
                      }
                      dispatch(
                        postUserAPI(usersObj)
                      );
                      localStorage.setItem(`${id.copid}/${id.id}1`, "passed");
                      localStorage.setItem(`${id.copid}/${id.id}/userID`, usersObj.id);
                      setPassed(true)
                    }else{
                      let idx = ChangedUsers.indexOf(ChangedUsers.filter(item => item.id == localStorage.getItem(`${id.copid}/${id.id}/userID`))[0])
                      let key  = Object.keys(ChangedUserskeys)[idx]
                      dispatch(
                        pathUserAPI({
                          key: key,
                          obj: {
                            ...ob
                          },
                        })
                      )
                      if(ChangedUsersStatus === 'fulfilled'){
                        setNowq(0)
                      localStorage.setItem(`${id.copid}/${id.id}1`, "passed");

                      }
                      setPassed(true)
                    }
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

export default AnswersV3;
