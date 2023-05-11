import React, { useState } from "react";
import Star from "./Star";
import DiogramUp from "./DiogramUp";
import { useDispatch, useSelector } from "react-redux";
import { changeOpros } from "../features/goods/allSlice";
import Quests from "./Quests";

const Yarus_v2 = ({ quest, nowq, setQuest }) => {


    function changeAnswer(item) {
        let cop = quest;
        let idx = cop[nowq].answers.indexOf(item);
        for (let i of cop[nowq].answers) {
          i.ansucc = false;
        }
        cop[nowq].answers[idx].ansucc = true;
        setQuest(cop);
      }

    return (

        <div className="">
            <div className="flex item-center">
                <h1 className=" w-[70%] text-2xl font-extrabold">
                    {quest[nowq]?.title}
                </h1>

                <div className="urus">
                    <div className="flex items-center gap-1">
                        <span className=" ">{nowq + 1} вопрос </span>
                        <p className=""> из {quest.length}</p>
                    </div>
                </div>
            </div>


            <p className="er_q" style={{ display: "none" }}>
                Выберите один из вариантов!
            </p>

            <p className="sel_q">Для выбора ответа нажмите на него!</p>
            <div className="quest_box">
                {quest[nowq]?.answers.map((answer, index) => (
                    <Quests
                        item={answer}
                        id={index}
                        changeAnswer={changeAnswer}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Yarus_v2;
