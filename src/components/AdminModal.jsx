import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { pathCompanyAPI } from "../features/thunk";

const AdminModal = ({
  arr,
  setModal,
  changeType,
  type,
  allQuests,
  QuestIdx,
}) => {
  const CompanyId = useParams().id;
  const allKey = useSelector((state) => state.all.userKey);
  const all = useSelector((state) => state.all.data);
  const logAll = useSelector((state) => state.all.status);
  const log = useSelector((state) => state.users.status);
  const [err, setErr] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function getKey() {
    return Object.keys(allKey)[
      all.indexOf(all.filter((item) => item.id === CompanyId)[0])
    ];
  }

  const [MainArr, setMainArr] = useState([...arr]);
  const [cop, setCop] = useState([
    ...JSON.parse(localStorage.getItem("changeArr")),
  ]);
  function ChangeQuestions(value, idx) {
    let NewArr = [...cop];
    let obj = {
      ...NewArr[idx],
      title: value,
    };
    NewArr.splice(idx, 1, obj);
    setCop([...NewArr]);
  }

  function ChangeAnswers(value, idx, i) {
    let NewArr = [...cop];
    let objChd = [...NewArr[idx].answers];

    let adw = {
      ...objChd[i],
      title: value,
    };
    objChd.splice(i, 1, adw);

    let obj = {
      ...NewArr[idx],
      answers: objChd,
    };
    NewArr.splice(idx, 1, obj);
    setCop([...NewArr]);
  }

  function AddQuestions() {
    type
      ? setCop([
          ...cop,
          {
            title: "Вопрос" + cop.length,
            succ: false,
            answers: [
              {
                title: "ответ1",
                ansucc: false,
              },
              {
                title: "ответ2",
                ansucc: false,
              },
              {
                title: "ответ3",
                ansucc: false,
              },
            ],
          },
        ])
      : setCop([
          ...cop,
          {
            title: "Вопрос" + cop.length,
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
        ]);
  }
  function AddAnswer(idx) {
    let asd = [...cop];
    asd[idx].answers.push({
      title: "ответ" + Number(asd[idx].answers.length + 1),
      ansucc: false,
    });
    setCop([...asd]);
  }
  function DeleteQuestions(idx, item) {
    const NewArr = MainArr.filter((i) => i !== item);
    setMainArr(NewArr);
  }
  useEffect(() => {
    setMainArr([...cop]);
  }, [cop]);
  return (
    <>
      <div className="modalAdmin">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              setCop([]);
              setErr(true)
            }}
            className="p-3 bg-[#f8ffac] cursor-pointer   rounded-md font-medium outline-none   button"
          >
            Очистить
          </button>
          {MainArr.map((item, idx) => (
            <div className="w-full" key={idx}>
              <div className="w-[80%] AdminQues  flex gap-2 p-5 bg-[#81dd9084] rounded-md">
                <span>{idx + 1} </span>
                <input
                  type="text"
                  className="w-[100%] bg-transparent"
                  defaultValue={item.title}
                  onInput={(e) => ChangeQuestions(e.target.value, idx)}
                />
              </div>

              <div className="pl-[50px] AdminAnswers w-full flex flex-col gap-3">
                {type
                  ? item.answers.map((i) => (
                      <div key={item.answers.indexOf(i)}>
                        <span>{item.answers.indexOf(i) + 1}. </span>
                        <input
                          type="text"
                          className="w-[90%]"
                          defaultValue={i.title}
                          onInput={(e) =>
                            ChangeAnswers(
                              e.target.value,
                              idx,
                              item.answers.indexOf(i)
                            )
                          }
                        />
                      </div>
                    ))
                  : null}
              </div>
              {/* {type ? (
                  <button
                    onClick={() => {
                      
                      AddAnswer(idx);
                    }}
                    className="p-3 bg-[#C7FFAC] w-full cursor-pointer mt-9  rounded-md font-medium outline-none   button"
                  >
                    Добавить ответ
                  </button>
                ) : null} */}
            </div>
          ))}
        </div>
        <br />
        <hr />
        <button
          className="p-3 bg-[#acffc8] w-full cursor-pointer mt-9  rounded-md font-medium outline-none   button"
          onClick={() => {
            if (changeType == "type1" && cop.length <= 11) {
              AddQuestions();
              setErr(true)
            }else if (changeType == "type2" && cop.length <= 4) {
              AddQuestions();
              setErr(true)
            }else if (changeType == "type3" && cop.length <= 5) {
              AddQuestions();
              setErr(true)
            } else{
              setErr(false)
            }
            
            
    
          }}
        >
          {err ? <p>Добавить Вопрос</p> : <p>Превышен лимит вопросов</p>}
        </button>
        <br />
        <button
          className="p-3 bg-[#acfff3] w-full cursor-pointer mt-9  rounded-md font-medium outline-none   button"
          onClick={() => {
            let copQuests = [...allQuests];
            let newObj = {
              ...copQuests[QuestIdx],
              DefAnswers: cop,
            };
            copQuests.splice(QuestIdx, 1, newObj);

            dispatch(
              pathCompanyAPI({
                key: getKey(),
                obj: {
                  questions: copQuests,
                },
              })
            );
            if (logAll === "fulfilled") {
              navigate("/nedminRegister/panel");
              // setTimeout(()=>{
              //   window.location.href = "/nedminRegister/panel";
              // } , 300)
            }
          }}
        >
          Сохранить
        </button>
      </div>
      <div className="modalAdminbg" onClick={() => setModal(false)}></div>
    </>
  );
};

export default AdminModal;
