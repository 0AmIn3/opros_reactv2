import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { postUsersAPI } from "../features/goods/thunk";
import Cookies from 'js-cookie';

const Register = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const randomId = Math.floor(Math.random() * 1000000);
    let obj = {
      userid: uuidv4(),
      a1: [],
      a2: [],
      a3: [],
      ...data
    };

    console.log(obj)
    
    dispatch(postUsersAPI(obj))
    Cookies.set('userid', `${uuidv4()}`, {
      expires: Infinity,
      path: '/',
    });    
  };
  const auth_status = Cookies.get('userid')
  if(auth_status) {
    window.location.href = './home'
  }


  useEffect(() => {
    return () => {
      const checkbox = document.querySelector(".checkbox input");
      const checkbox_label = document.querySelector(".checkbox label");

      checkbox_label.addEventListener("click", () => {
        if (checkbox.checked) {
          checkbox_label.firstElementChild.style.display = "none";
        } else {
          checkbox_label.firstElementChild.style.display = "block";
        }
      });
    };
  }, []);

  return (
    <>
      <div className="container"></div>
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
              const checkbox_label = document.querySelector(".checkbox label");
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
              const checkbox_label = document.querySelector(".checkbox label");
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
            }}
          >
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
