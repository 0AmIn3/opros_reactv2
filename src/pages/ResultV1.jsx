import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import ResAns from "../components/ResAns";

const ResultV1 = () => {
  const all = useSelector((state) => state.all.data)
  const dispatch = useDispatch();
  const [allusers, setAllusers] = useState([]);
  const myid = Cookies.get("userid");
  const questDef = [
    {
      title:
        "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
      succ: false,
      answers: [
        {
          title:
            "Могу остановить принятие решения, если предоставлю необходимую аргументацию",
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
      title: "Могу ли я свободно выбирать свой вид деятельности в организации?",
      succ: false,
      answers: [
        {
          title: "Сам(-а) выбираю интересующую меня область деятельности",
          ansucc: false,
        },
        {
          title:
            "Есть свобода смены вида деятельности, но на практике договориться об этом сложно",
          ansucc: false,
        },
        {
          title: "Могу работать только в рамках оговоренного вида деятельности",
          ansucc: false,
        },
      ],
    },
    {
      title: "Могу ли я свободно управлять своим временем?",
      succ: false,
      answers: [
        {
          title:
            "Я свободно управляю временем, выбирая когда я хочу заниматься делами организации и всем остальным, что с ней не связано",
          ansucc: false,
        },
        {
          title:
            "Я могу управлять временем, но процесс договоренности об этом с коллегами или руководителями не всегда простой",
          ansucc: false,
        },
        {
          title:
            "Я вынужден(-а) трудится в установленных для меня регламентах времени",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Могу ли я выбрать такие же возможности получения дохода, которые есть у владельцев организации?",
      succ: false,
      answers: [
        {
          title:
            "Мне доступны модели получения дохода как у владельцев организации, при условии взятия на себя большей ответственности",
          ansucc: false,
        },
        {
          title:
            "Мне долгосрочные модели финансовой мотивации, сроком более 1 года",
          ansucc: false,
        },
        {
          title:
            "Мне доступны только краткосрочные договоренности по финансовой мотивации",
          ansucc: false,
        },
      ],
    },
    {
      title: "Насколько я чувствую себя частью общей команды?",
      succ: false,
      answers: [
        {
          title:
            "Я ощущаю себя частью большой команды, вне зависимости от своего настроения",
          ansucc: false,
        },
        {
          title:
            "Периодически я чувствую себя отделенным или чувствую общность только с несколькими участниками проекта",
          ansucc: false,
        },
        {
          title: "Я чувствую себя часть команды очень редко",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Имею ли я возможность реализовывать свои идеи и предложения, в независимости от своей позиции в организации?",
      succ: false,
      answers: [
        {
          title: "Да, если предоставлю необходимую для этого аргументацию",
          ansucc: false,
        },
        {
          title:
            "Есть вопросы, на которые я не могу влиять, но по большей части я могу реализовывать свои идеи и предложения",
          ansucc: false,
        },
        {
          title:
            "На практике у меня нет инструментов, с помощью которых я мог бы реализовать значимые идеи и предложения по улучшению организации",
          ansucc: false,
        },
      ],
    },
    {
      title: "Имею ли я доступ ко всей нужной мне информации в организации?",
      succ: false,
      answers: [
        {
          title:
            "Я легко могу получить разъяснение о причинах принятия тех или иных решений, а также необходимую мне информацию",
          ansucc: false,
        },
        {
          title:
            "Я могу получить доступ ко всей нужной мне информации, но это сложно и требует больших усилий",
          ansucc: false,
        },
        {
          title:
            "По большей части у меня нет инструментов получения нужной мне информации",
          ansucc: false,
        },
      ],
    },
    {
      title: "Насколько я чувствую уровень доверия в организации?",
      succ: false,
      answers: [
        {
          title:
            "Я чувствую доверие коллегам и не сталкивался с фактами недоверия к себе",
          ansucc: false,
        },
        {
          title:
            "Изредка я чувствую недоверие к коллегам или были редкие факты недоверия к себе",
          ansucc: false,
        },
        {
          title:
            "Я чувствую, что в нашей команде отсутствует доверие к друг другу",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько деятельность нашей организации (ее миссия) находит отклик в моем сердце?",
      succ: false,
      answers: [
        {
          title:
            "Мысль о том, что мы создаем, наполняет меня энергией и желанием действовать",
          ansucc: false,
        },
        {
          title:
            "Меня заряжает наша миссия, но я чувствую недостаточную связь с реальными делами",
          ansucc: false,
        },
        {
          title:
            "Наша миссия вызывает у меня некоторый позитивный эмоциональный отклик",
          ansucc: false,
        },
        {
          title: "У меня нет эмоциональной связи с миссией нашей организации",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Насколько я чувствую, что организация непрерывно развивается и совершенствуется?",
      succ: false,
      answers: [
        {
          title:
            "Я ежедневно ощущаю движение компании в сторону роста и развития",
          ansucc: false,
        },
        {
          title:
            "Периодически, я чувствую застой или сильное замедление развития компании",
          ansucc: false,
        },
        {
          title: "Я чаще чувствую стагнацию, нежели развитие и процветание",
          ansucc: false,
        },
      ],
    },
    {
      title: "Насколько естественно проявление эмоций в организации?",
      succ: false,
      answers: [
        {
          title:
            "Я чувствую легкость и безопасность в выражении своих негативных и позитивных состояний и вижу такую же естественность у коллег",
          ansucc: false,
        },
        {
          title:
            "Я чувствую некоторые опасения относительно честного выражения своих эмоций и состояний в коллективе, наблюдаю то же и у коллег",
          ansucc: false,
        },
        {
          title:
            "В коллективе мы прячем эмоции друг от друга, обсуждая только рабочие вопросы",
          ansucc: false,
        },
      ],
    },
    {
      title: "Могу ли я принимать решения по расходам организации?",
      succ: false,
      answers: [
        {
          title:
            "ddddМне доступен простой процесс получения денег на нужные мне расходы и найм новых сотрудников, если я обеспечиваю прозрачность и аргументацию",
          ansucc: false,
        },
        {
          title:
            "Я могу получить деньги на нужные расходы и нанять новых сотрудников, но это сложно и требует больших усилий",
          ansucc: false,
        },
        {
          title:
            "На практике, для меня практически невозможно получить деньги на нужные мне расходы или нанять нужных мне сотрудников",
          ansucc: false,
        },
      ],
    },
    {
      title:
        "Чувствую ли я, что меня видят и слышат в организации, мои успехи замечают?",
      succ: false,
      answers: [
        {
          title:
            "Да, чувствую внимание к себе. Меня благодарят, отмечают успехи и достижения. Я доволен(-а).",
          ansucc: false,
        },
        {
          title:
            "Меня иногда благодарят и отмечают мои успехи и достижения, но я чувствую нехватку внимания к себе",
          ansucc: false,
        },
        {
          title: "Практически никогда этого не происходит",
          ansucc: false,
        },
      ],
    },
    {
      title: "Я могу влиять на любого коллегу и любой может влиять на меня?",
      succ: false,
      answers: [
        {
          title:
            "Я могу повлиять на деятельность любого сотрудника, вплоть до увольнения, если предоставлю необходимую аргументацию",
          ansucc: false,
        },
        {
          title:
            "У меня есть возможность существенно влиять на деятельность коллег в рамках своего круга",
          ansucc: false,
        },
        {
          title:
            "Практически не имеют возможность влиять на деятельность коллег",
          ansucc: false,
        },
      ],
    },
  ];
  const [peoples, setPeoples] = useState([]);
  const [user, setUser] = useState();
  const [Load, setLoad] = useState(false);
  const [LoadQ, setLoadQ] = useState(false);
  const id = useParams();
  const answers = useSelector((state) => state.answers.data);
  const log = useSelector((state) => state.answers.status);
  const logAll = useSelector((state) => state.all.status);
  const qw = answers.filter((item) => item.resultid == id.id);
  const [quest, setQuest] = useState(questDef);
  // let result =  inds(all);
  // console.log(result);
  function dwdwa() {
    const auth_status = Cookies.get("userid");
    if (logAll === "fulfilled" && log === "fulfilled") {
      setPeoples(all.filter((item) => item[`${answers.filter(item => item.resultid == id.id)[0].id}`]));
      setUser(...all.filter((item) => item.id == auth_status));
      setQuest(answers.filter((item) => item.resultid == id.id)[0].DefAnswers);
      console.log();
      setLoad(true);
      setLoadQ(true); 
    }
  }

  async function inds(arr) {
    let qsum = 0;
    let qlen = 0;
  
    async function kgball(ass, n) {
      let ans_i = ass.indexOf(n);
      if (ans_i === 0) {
        qsum = qsum + 1;
      } else if (ans_i === 1) {
        qsum = qsum + 0.5;
      } else if (ans_i === 1) {
        qsum = qsum + 0;
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      let iam_q = true;
  
      async function calcind(myq) {
        if (myq.length > 0) {
          for (let iq of myq) {
            for (let ans of iq.answers) {
              if (ans.ansucc === true) {
                if (iam_q === true) {
                  qlen = qlen + myq.length;
                  iam_q = false;
                }
                await kgball(iq.answers, ans); // Ожидание асинхронного вызова kgball
              }
            }
          }
        }
      }
  
      await calcind(item.a1); // Ожидание асинхронного вызова calcind
    }
  
    return `${(qsum / qlen) * 100}`;
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="answers pt-[100px] relative bg-white">
        <Link to={"/home"}>
          <div className="absolute right-[30px] top-[20px] close_btn">
            <IoCloseSharp />
          </div>
        </Link>

        <div className="ind_cel">
          {/* <p>Индекс целостности = {Load && LoadQ ? Math.round(inds(all)) : dwdwa()}%</p> */}
        </div>
        {Load && LoadQ
          ? quest.map((q, ind) => (
              <ResAns qus={q} all={peoples} idkey={answers.filter(item => item.resultid == id.id)[0].id} key={ind} index={ind} />
            ))
          : dwdwa()}
      </div>
    </>
  );
};

export default ResultV1;
