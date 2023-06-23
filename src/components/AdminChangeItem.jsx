import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pathCompanyAPI } from "../features/thunk";

const AdminChangeItem = ({
  item,
  setModal,
  setType,
  setQuests,
  saveBtn,
  setQuestIdx,
  idx,
  setChangeType
}) => {
  let CompanyId = useParams().id;
  const all = useSelector((state) => state.all.data);
  const allKey = useSelector((state) => state.all.userKey);
  const logAll = useSelector((state) => state.all.status);
  const [val, setval] = useState("");
  const dispatch = useDispatch();

  function getKey() {
    return Object.keys(allKey)[
      all.indexOf(all.filter((item) => item.id === CompanyId)[0])
    ];
  }

  function ChangeName(value) {
    let copQuests = [...all.filter((item) => item.id === CompanyId)][0];
    let dwed = [...copQuests.questions];
    let newObj = {
      ...dwed[idx],
      name: value,
    };

    dwed.splice(idx, 1, newObj);

    setval(dwed);
  }

  return (
    <>
      <div className="flex gap-7 AdminChange mt-4 w-full justify-between">
        <p className=" w-[50%]">
          <input
            type="text"
            className=" outline-none w-[100%]"
            defaultValue={item.name}
            onInput={(e) => {
              ChangeName(e.target.value);
              saveBtn(idx);
            }}
          />
        </p>
        <p
          id="save"
          style={{ display: "none" }}
          onClick={() => {
            dispatch(
              pathCompanyAPI({
                key: getKey(),
                obj: {
                  questions: val,
                },
              })
            );
            if (logAll === "fulfilled") {
              setTimeout(() => {
                window.location.href = "/nedminRegister/panel";
              }, 800);
            }
          }}
        >
          Сохранить
        </p>
        <p
          onClick={() => {
            setChangeType(item.type)
            setModal(true);
            // setQuests([...item.DefAnswers].length);
            setQuestIdx(idx);
            if(!item.DefAnswers && item.type === "type1"){
              localStorage.setItem("changeArr", JSON.stringify([
                {
                  title:
                    "Вопрос1",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос2",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос3",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос4",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос5",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос6",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос7",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос8",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос9",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос10",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос11",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос12",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
            
              ]));
            }else if(!item.DefAnswers && item.type === "type2"){
              localStorage.setItem("changeArr", JSON.stringify(   [
                {
                  title:
                    "Вопрос1",
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
                  "Вопрос2",
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
                  "Вопрос3",
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
                  "Вопрос4",
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
                  "Вопрос5",
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
              ]));
            }else if(!item.DefAnswers && item.type === "type3"){
              localStorage.setItem("changeArr", JSON.stringify(   [
                {
                  title:
                    "Вопрос1",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос2",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос3",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос4",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос5",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
                {
                  title:
                    "Вопрос6",
                  succ: false,
                  answers: [
                    {
                      title:
                        "Ответ1",
                      ansucc: false,
                    },
                    {
                      title:
                      "Ответ2",
                      ansucc: false,
                    },
                    {
                      title:
                        "Ответ3",
                      ansucc: false,
                    },
                  ],
                },
              ]));
            }else{
              localStorage.setItem("changeArr", JSON.stringify(item.DefAnswers));
            }
           
            if (item.type === "type2") {
              setType(false);
            } else {
              setType(true);
            }
          }}
          className=" p-3 bg-[#77dddf] cursor-pointer   rounded-md font-medium outline-none   button"
        >
          Изменить
        </p>
      </div>
      <hr className=" mt-4" />
    </>
  );
};

export default AdminChangeItem;
