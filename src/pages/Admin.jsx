import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Admin = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("adminUsers"))
  );
  const cookies = new Cookies();

  useEffect(() => {
    cookies.set("name", "admin", { path: "/" });
    if (!localStorage.getItem("adminUsers")) {
      axios
        .get("http://localhost:3001/users")
        .then((res) =>
          localStorage.setItem("adminUsers", JSON.stringify(res.data))
        );
    }
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const cookies = new Cookies();
    axios
      .get("https://tealband-4afc1-default-rtdb.firebaseio.com/admin.json")
      .then((res) => {
        let user = res.data[0];
        if (user.email == data.email && user.password == data.password) {
          navigate("/nedminRegister/panel");
          cookies.set("key",`${user.email}${user.password}` , { path: "/" });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="bg-[#ffffff] flex rounded-[30px] flex-col  items-center justify-center p-5 reg_centr">
          <div className="w-[50%] mt-[40px] px-10 regch_centr">
            <h1 className="text-[#252733] text-[27px] font-bold text-center">
              Вход в админ панель
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[50px]">
              <label>
                <span className="text-[#101010] text-[14px] font-bold">
                  E-mail
                </span>
                <input
                  {...register("email", { required: true })}
                  className="border border-[#101010] rounded-[8px] w-full h-[42px] px-4 mb-[24px] mt-1"
                  type="text"
                  placeholder="Введите e-mail"
                />
              </label>
              <label>
                <span className="text-[#101010] text-[14px] font-bold">
                  Пароль
                </span>
                <input
                  {...register("password", { required: true })}
                  className="border border-[#101010] rounded-[8px] w-full h-[42px] px-4 mb-[24px] mt-1"
                  type="password"
                  placeholder="Введите пароль"
                />
              </label>
              <label className="text-center">
                <button className="bg-[#101010] text-[#ffffff] w-full rounded-[8px] h-[48px]">
                  Вход
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
