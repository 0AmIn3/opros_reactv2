import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAPI, postUsersAPI } from "../features/thunk";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // const [count, setCount] = useState(0);
  const all = useSelector((state) => state.all.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logAll = useSelector((state) => state.all.status);
  useEffect(() => {
    if (!all.length) {
      dispatch(getUsersAPI());
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
      Cookies.set("userid", `${aa[0].id}`, {
        expires: Infinity,
        path: "/",
      });
      navigate('/home')
    } else {
      let obj = {
        id: uuidv4(),
        ...data,
      };
      Cookies.set("userid", `${obj.id}`, {
        expires: Infinity,
        path: "/",
      });

      
      dispatch(postUsersAPI(obj));
      if (logAll === 'fulfilled') {
        navigate('/home')
      }
      
    }
  };
function check(){
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

  useEffect(() => {
    check()
  }, []);

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
