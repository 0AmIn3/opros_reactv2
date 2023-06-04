import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAPI, postCompanyAPI } from "../features/thunk";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const IsCompany = Cookies.get("IsCompany");
  const IsUser = Cookies.get("IsUser");
  const all = useSelector((state) => state.all.data);
  const all2 = useSelector((state) => state.all.userKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logAll = useSelector((state) => state.all.status);
  useEffect(() => {
    if (!all.length) {
      dispatch(getCompanyAPI());
    }
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const randomId = Math.floor(Math.random() * 1000000);
    let cop = [...all];
    let aa = cop.filter((item) => item.email === data.email);
    if (aa.length > 0) {
      Cookies.set("IsCompany", `true`, {
        expires: Infinity,
        path: "/",
      });
      navigate("/" + aa[0].id);
    } else {
      let obj = {
        id: uuidv4(),
        ...data,
        questions: [
          {
            id: "sdflk24234",
            resultid: "psdflk24234",
            name: "Провести диагностику целостности",
            type: "type1",
            DefAnswers: [
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
                    title:
                      "Могу влиять только на большую часть решений, но не на все",
                    ansucc: false,
                  },
                  {
                    title:
                      "Практически ни на что не могу влиять в нашей организации",
                    ansucc: false,
                  },
                ],
              },
              {
                title:
                  "Могу ли я свободно выбирать свой вид деятельности в организации?",
                succ: false,
                answers: [
                  {
                    title:
                      "Сам(-а) выбираю интересующую меня область деятельности",
                    ansucc: false,
                  },
                  {
                    title:
                      "Есть свобода смены вида деятельности, но на практике договориться об этом сложно",
                    ansucc: false,
                  },
                  {
                    title:
                      "Могу работать только в рамках оговоренного вида деятельности",
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
                    title:
                      "Да, если предоставлю необходимую для этого аргументацию",
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
                title:
                  "Имею ли я доступ ко всей нужной мне информации в организации?",
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
                    title:
                      "Я чаще чувствую стагнацию, нежели развитие и процветание",
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
          
            ],
          },
          {
            id: "jkjoisdflk24234",
            resultid: "pjkjoisdflk24234",
            name: "Тест для первого яруса",
            type: "type2",
            DefAnswers: [
              {
                title:
                  "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
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
                  "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
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
                  "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
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
                  "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
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
                  "Могу ли я остановить принятие любого решения, если оцениваю его небезопасным для себя?",
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
            ],
          },
          {
            id: "wer23",
            resultid: "pwer23",
            name: "Тест для второго яруса",
            type: "type3",
            DefAnswers: [
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "Организация, где самоуправление происходит с помощью встреч, на которых происходят принятие решений, договоренности, выбор на зону ответственности и другие организационные вопросы (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "Организация, где самоуправление происходит интуитивным образом, встречи, если они есть, посвящены внутренней работе, генеративному слушанию, тишине, благодарности и медитациям (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "Организация, где отсутствует самоуправление (серый)",
                    ansucc: false,
                  },
                  
                ],
              },
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "Мы стремимся занять лидирующее положение на рынке, предоставив наилучший продукт нашим клиентам, меняющий мир к лучшему (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "Мы стремимся к изменению мира к лучшему, в этом изменении для нас важно внутреннее состояние, чем меньше при этом будет наша организация, тем лучше (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "У нас нет целей реализовать значимый смысл, меняющий мир к лучшему, мы просто работаем и зарабатываем деньги (серый)",
                    ansucc: false,
                  },
                ],
              },
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "Мы создаем такой продукт, который поможет нам выиграть в конкурентной борьбе и стать лучшими (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "Мы создаем технологии которыми может пользоваться любая организация в нашей отрасли, для того, чтобы уйти от конкуренции к сотрудничеству (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "Ничего из перечисленного к нам не применимо (серый)",
                    ansucc: false,
                  },
                ],
              },
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "Мы стремимся ставить перед собой и внутри организации цели, которые можно измерить с помощью цифр, для того, чтобы измерять наши достижения (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "Мы развиваем качество самого процесса, а не результата. У нас нет целей, выраженных цифровыми показателями (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "Ничего из перечисленного к нам не применимо (серый)",
                    ansucc: false,
                  },
                ],
              },
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "В нашей деятельности мы учитываем интересы наших клиентов, сотрудников, акционеров и партнеров (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "В нашей деятельности мы учитываем интересы всех людей и всех живых созданий на планете (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "В нашей деятельности мы учитываем интересы наших клиентов, акционеров и партнеров (серый)",
                    ansucc: false,
                  }
            
                ],
              },
              {
                title:
                  "Что лучше всего описывает вашу организацию:",
                succ: false,
                answers: [
                  {
                    title: "Мы формируем такое ценообразование, которое помогает нам расти быстрее (желтый)",
                    ansucc: false,
                  },
                  {
                    title: "Мы стремимся по-возможности предоставлять наши продукты в дар или сделать их бесплатными; стремимся к прозрачности ценообразования; стремимся к справедливости и учете интересов всех заинтересованных сторон (бирюзовый)",
                    ansucc: false,
                  },
                  {
                    title: "Ничего из перечисленного к нам не применимо (серый)",
                    ansucc: false,
                  }
                ],
              },
            ],
          },
        ],
      };
      Cookies.set("IsCompany", `true`, {
        expires: Infinity,
        path: "/",
      });

      dispatch(postCompanyAPI(obj));
      if (logAll === "fulfilled") {
        navigate("/" + obj.id);
      }
    }
  };
  function check() {
    const checkbox = document.querySelector(".checkbox input");
    const checkbox_label = document.querySelector(".checkbox label");

    checkbox_label.addEventListener("click", () => {
      if (checkbox.checked) {
        checkbox_label.firstElementChild.style.display = "none";
      } else {
        checkbox_label.firstElementChild.style.display = "block";
      }
    });
  }


  if (IsUser == "true") {
    return (
      <>
        <div className="container"></div>
        <div className="bgall"></div>
        <div className="bgopa"></div>
        <div className="reg_box  flex items-center justify-center">
          <h1>404 Page in not found</h1>
        </div>
      </>
    );
  } else {
    useEffect(()=>{
      check()
    })
    return (
      <>
        <div className="container"></div>
        <div className="bgall"></div>
        <div className="bgopa"></div>
        <div className="reg_box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Вход</h1>
            <input
              placeholder="Компания"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Электронная почта"
              {...register("email", { required: true })}
            />

            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <div
              className="checkbox"
              onClick={() => {
                const polic = document.querySelector("#polic");
                const checkbox_label =
                  document.querySelector(".checkbox label");
                const checkbox_span = document.querySelector(".checkbox span");
                if (polic.checked) {
                  checkbox_label.style.border = "1px solid #000000";
                  checkbox_span.style.color = "#000000";
                  checkbox_span.style.opacity = 0.6;
                }
              }}
            >
              <input
                type="checkbox"
                id="polic"
                {...register("polic", { required: true })}
              />
              <label htmlFor="polic">
                <img src="/assets/check.svg" style={{ display: "none" }} />
              </label>
              <span>
                Я принимаю условия обработки персональных
                <br /> данных и политику конфиденциальности.{" "}
              </span>
            </div>

            <button
              type="submit"
              className="sbm_btn"
              onClick={() => {
                
                const polic = document.querySelector("#polic");
                const checkbox_label =
                  document.querySelector(".checkbox label");
                const checkbox_span = document.querySelector(".checkbox span");
                if (polic.checked) {
                  checkbox_label.style.border = "1px solid #000000";
                  checkbox_span.style.color = "#000000";
                  checkbox_span.style.opacity = 0.6;
                } else {
                  checkbox_label.style.border = "1px solid #ff0000";
                  checkbox_span.style.color = "#ff0000";
                  checkbox_span.style.opacity = 1;
                }
              }
              
            
            }
            >
              Войти
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default Register;
