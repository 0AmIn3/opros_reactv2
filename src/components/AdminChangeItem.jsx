import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pathCompanyAPI, pathSampleAPI } from "../features/thunk";

const AdminChangeItem = ({
  item,
  setModal,
  setType,
  setQuests,
  saveBtn,
  setQuestIdx,
  idx,
  setChangeType,
}) => {
  let CompanyId = useParams().id;
  const all = useSelector((state) => state.all.data);
  const allKey = useSelector((state) => state.all.userKey);
  const logAll = useSelector((state) => state.all.status);
  const sample = useSelector((state) => state.sample.data);
  const sampleKey = useSelector((state) => state.sample.userKey);
  const logsample = useSelector((state) => state.sample.status);
  const [val, setval] = useState("");
  const dispatch = useDispatch();

  function getKey() {
    if (CompanyId === "sample") {
      return Object.keys(sampleKey)[
        sample.indexOf(sample.filter((item) => item.id === CompanyId)[0])
      ];
    } else {
      return Object.keys(allKey)[
        all.indexOf(all.filter((item) => item.id === CompanyId)[0])
      ];
    }
  }

  function ChangeName(value) {
    let copQuests =
      CompanyId == "sample"
        ? [...sample.filter((item) => item.id === CompanyId)][0]
        : [...all.filter((item) => item.id === CompanyId)][0];
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
            if (CompanyId === "sample") {
              dispatch(
                pathSampleAPI({
                  key: getKey(),
                  obj: {
                    questions: val,
                  },
                })
              );
            } else {
              dispatch(
                pathCompanyAPI({
                  key: getKey(),
                  obj: {
                    questions: val,
                  },
                })
              );
            }
            if (logAll === "fulfilled" || logsample === "fulfilled") {
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
            setChangeType(item.type);
            setModal(true);
            // setQuests([...item.DefAnswers].length);
            setQuestIdx(idx);
            if (!item.DefAnswers && item.type === "type1") {
              localStorage.setItem(
                "changeArr",
                JSON.stringify([
                  {
                    title: "Вопрос1",
                    succ: false,
                    answers: [
                      {
                        idx: 0,
                        title: "Ответ1",
                        ansucc: false,
                      },
                      {
                        idx: 1,
                        title: "Ответ2",
                        ansucc: false,
                      },
                      {
                        idx: 2,
                        title: "Ответ3",
                        ansucc: false,
                      },
                    ],
                  },
                  {
                    title: "Вопрос2",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос3",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос4",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос5",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос6",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос7",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос8",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос9",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос10",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос11",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        idx: 2,
                        ansucc: false,
                      },
                    ],
                  },
                  {
                    title: "Вопрос12",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                ])
              );
            } else if (!item.DefAnswers && item.type === "type2") {
              localStorage.setItem(
                "changeArr",
                JSON.stringify([
                  {
                    title: "Вопрос1",
                    succ: false,
                    answers: [
                      {
                        title: "0",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "1",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "2",
                        ansucc: false,
                        idx: 2,
                      },
                      {
                        title: "3",
                        ansucc: false,
                        idx: 3,
                      },
                      {
                        title: "4",
                        ansucc: false,
                        idx: 4,
                      },
                      {
                        title: "5",
                        ansucc: false,
                        idx: 5,
                      },
                    ],
                  },
                  {
                    title: "Вопрос2",
                    succ: false,
                    answers: [
                      {
                        title: "0",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "1",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "2",
                        ansucc: false,
                        idx: 2,
                      },
                      {
                        title: "3",
                        ansucc: false,
                        idx: 3,
                      },
                      {
                        title: "4",
                        ansucc: false,
                        idx: 4,
                      },
                      {
                        title: "5",
                        ansucc: false,
                        idx: 5,
                      },
                    ],
                  },
                  {
                    title: "Вопрос3",
                    succ: false,
                    answers: [
                      {
                        title: "0",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "1",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "2",
                        ansucc: false,
                        idx: 2,
                      },
                      {
                        title: "3",
                        ansucc: false,
                        idx: 3,
                      },
                      {
                        title: "4",
                        ansucc: false,
                        idx: 4,
                      },
                      {
                        title: "5",
                        ansucc: false,
                        idx: 5,
                      },
                    ],
                  },
                  {
                    title: "Вопрос4",
                    succ: false,
                    answers: [
                      {
                        title: "0",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "1",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "2",
                        ansucc: false,
                        idx: 2,
                      },
                      {
                        title: "3",
                        ansucc: false,
                        idx: 3,
                      },
                      {
                        title: "4",
                        ansucc: false,
                        idx: 4,
                      },
                      {
                        title: "5",
                        ansucc: false,
                        idx: 5,
                      },
                    ],
                  },
                  {
                    title: "Вопрос5",
                    succ: false,
                    answers: [
                      {
                        title: "0",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "1",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "2",
                        ansucc: false,
                        idx: 2,
                      },
                      {
                        title: "3",
                        ansucc: false,
                        idx: 3,
                      },
                      {
                        title: "4",
                        ansucc: false,
                        idx: 4,
                      },
                      {
                        title: "5",
                        ansucc: false,
                        idx: 5,
                      },
                    ],
                  },
                ])
              );
            } else if (!item.DefAnswers && item.type === "type3") {
              localStorage.setItem(
                "changeArr",
                JSON.stringify([
                  {
                    title: "Вопрос1",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос2",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос3",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос4",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос5",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                  {
                    title: "Вопрос6",
                    succ: false,
                    answers: [
                      {
                        title: "Ответ1",
                        ansucc: false,
                        idx: 0,
                      },
                      {
                        title: "Ответ2",
                        ansucc: false,
                        idx: 1,
                      },
                      {
                        title: "Ответ3",
                        ansucc: false,
                        idx: 2,
                      },
                    ],
                  },
                ])
              );
            } else {
              localStorage.setItem(
                "changeArr",
                JSON.stringify(item.DefAnswers)
              );
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
