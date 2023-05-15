import React from "react";
import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";
import EditAns from "./EditAns";
import { useDispatch } from "react-redux";
import { deleteAnswer } from "../features/answers/answersSlice";

const EditQuest = ({
  quest,
  num,
  delQuest,
  deleteans,
  setNewarr,
  newarr,
  changeQuest,
  changeAnswers,
  idxOpr
}) => {

    const dispatch = useDispatch();

  return (
    <div className="mt-[70px]">
      <div className="flex gap-5 items-center mt-[20px]">
        <span className="text-[20px] text-[gray]">{num + 1}</span>
        <input
          defaultValue={quest.title}
          type="text"
          placeholder="вопрос"
          className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none"
          // {...register("name")}

          onChange={(e) => {
            console.log(e.target.value);
            changeQuest(num, e.target.value);
          }}
        />
        <TiDelete
          className="text-[60px] cursor-pointer text-red-600"
          onClick={() => {
            delQuest(num);
            // dispatch(deleteAnswer( {idxOpr: idxOpr , idx : num}))
            // console.log(num);
          }}
        />
      </div>
      <br />
      <div className="flex flex-col gap-6 px-6 ">
        {quest.answers.map((answer, ind) => (
          <EditAns
            answer={answer}
            deleteans={deleteans}
            ind={ind}
            indarr={num}
            changeAnswers={changeAnswers}
            key={ind}
          />
        ))}

        <div className="w-full flex justify-end">
          <button
            className="rounded-[7px] w-[40%] bg-[#000000] px-6 py-4 text-[#ffffff] font-bold outline-none cursor-pointer mr-[45px]"
            onClick={() => {
              const newa = {
                title: "Ответ",
                ansucc: false,
              };

              const megaans = [...newarr];
              console.log(megaans[num].answers);
              megaans[num].answers.push(newa);
              setNewarr(megaans);
            }}
          >
            Добавить новый ответ
          </button>
        </div>
      </div>
    </div>
  );
};

EditQuest.propTypes = {};

export default EditQuest;
