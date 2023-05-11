import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuestMain from '../components/QuestMain';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../features/goods/allSlice';
import { IoCloseSharp } from 'react-icons/io5'
import { SlArrowRight } from "react-icons/sl";
import Yarus_v2 from '../components/Yarus_v2';
import Cookies from 'js-cookie';
import { pathUsersAPI } from "../features/goods/thunk";

const AnswersV1 = () => {
  const [count, setCount] = useState(0);
  const [nowq, setNowq] = useState(0)
  const auth_status = Cookies.get('userid')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questDef = [
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
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
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
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
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
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
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
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
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
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
          title: "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title: "Могу влиять только на большую часть решений, но не на все",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title: "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title: "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Практически ни на что не могу влиять в нашей организацииЯ чувствую себя часть команды очень редко",
          ansucc: false,
        },
      ],
    },

  ];


  const [quest, setQuest] = useState(questDef);

  return (
    <>
      <>

        <div className="answers relative pt-[100px] bg-white">


          <Link to={"/home"}>
            <div className="absolute right-[30px] top-[20px] close_btn">
              <IoCloseSharp />
            </div>
          </Link>

          <Yarus_v2
            quest={quest}
            nowq={nowq}
            setQuest={setQuest}
            key={nowq}
          />

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
                    dispatch(pathUsersAPI({id:auth_status , obj : {a1:quest }}))
                    navigate('/psdflk24234')
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