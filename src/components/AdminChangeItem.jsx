import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pathCompanyAPI } from "../features/thunk";

const AdminChangeItem = ({ item, setModal, setType, setQuests,saveBtn, setQuestIdx, idx }) => {
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
    <div className="flex gap-7 w-full justify-between">
      <p className=" w-[50%]">
        <input
          type="text"
          className=" w-[100%]"
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
            window.location.href = "/nedminRegister/panel";
          }
        }}
      >
        Сохранить
      </p>
      <p
        onClick={() => {
          setModal(true);
          setQuests([...item.DefAnswers]);
          setQuestIdx(idx);
          localStorage.setItem("changeArr", JSON.stringify(item.DefAnswers));
          if(item.type === 'type1'){
            setType(true)
          }else{
            setType(false)
          }
        }}
        className=" p-3 bg-[#C7FFAC] cursor-pointer   rounded-md font-medium outline-none   button"
      >
        Изменить
      </p>
    </div>
  );
};

export default AdminChangeItem;
