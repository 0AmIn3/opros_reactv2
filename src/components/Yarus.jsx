import React, { useState } from "react";
import Star from "./Star";
import { useDispatch, useSelector } from "react-redux";

const Yarus = ({ quest, nowq, setQuest , opr }) => {

  const [peoples, setPeoples] = useState(0);
  const questUser = useSelector((state) => state.all?.data);
	const dispatch = useDispatch();
  
  const [newobj, setNewobj] = useState([]);
  function changes(){
    let al = [];
    let obj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      
      if(peoples > 0){
        for (let i of questUser) {
          
          for (let a of i[opr][nowq].answers) {
            if (a.ansucc) {
              obj[a.title]++;
    
              al.push(a);
              setPeoples(al.length);
            }
          }
        }
        setNewobj(Object.values(obj));
      }
  
}

  function changeAnswer(item) {
    let cop = quest;
    let idx = cop[nowq].answers.indexOf(item);
    for (let i of cop[nowq].answers) {
      i.ansucc = false;
    }
    cop[nowq].answers[idx].ansucc = true;
    setQuest([...cop]);


  }

  return (
    <div className="">
      <div className="flex item-center ques_flex">
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
      <p className=" mt-7 text-sm opacity-30">
        0 - Совсе не характерно, 5 - Полностью соответсвует 
      </p>
      <div className=" flex gap-3 mt-5 start_it">
        {quest[nowq]?.answers.map((answer, index) => (
          <Star
            title={answer}
            changeAnswer={changeAnswer}
            item={quest[nowq]}
            id={index}
            key={index}
            changes={changes}
            quest={quest}
          />
        ))}
      </div>
   {/* {<DiogramUp item={quest[nowq]} newobj={newobj} peoples={peoples} setPeoples={setPeoples} nowq = {nowq} opr ={opr} />} */}
    </div>
  );
};

export default Yarus;
