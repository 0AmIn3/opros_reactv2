import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAPI } from '../features/goods/thunk';
import Cookies from 'js-cookie';
import ResQues from '../components/ResQues';

const ResultV1 = () => {
  const all = useSelector((state) => state.all.data);
  const dispatch = useDispatch();
  const [allusers, setAllusers] = useState([]);

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


  function inds(arr) {
    let qsum = 0
    let qlen = 0

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      let iam_q = true
      function calcind(myq) {

        function kgball(ass, n) {
          let ans_i = ass.indexOf(n)
          if (ans_i === 0) {
            qsum = qsum + 1
          } else if (ans_i === 1) {
            qsum = qsum + 0.5
            console.log(qsum);
          } else if (ans_i === 1) {
            qsum = qsum + 0
          }
        }


        if (myq.length > 0) {
          for (let iq of myq) {
            for (let ans of iq.answers) {
              if (ans.ansucc === true) {
                if (iam_q === true) {
                  qlen = qlen + myq.length
                  iam_q = false
                }
                kgball(iq.answers, ans)
              }
            }
          }
        }

      }

      calcind(item.a1)
    }

    return `${(qsum / qlen) * 100}`
  }

  return (
    <>

      <div className="answers pt-[100px] relative bg-white">
        <Link to={"/home"}>
          <div className="absolute right-[30px] top-[20px] close_btn">
            <IoCloseSharp />
          </div>
        </Link>

        <div className="ind_cel">
          <p>Индекс целостности = {inds(all)}%</p>
        </div>

        {(() => {
          const myid = Cookies.get("userid");
          return <ResQues quest={questDef} id={myid} all={all} />;
        })()}

      </div>
    </>
  );
};

export default ResultV1;