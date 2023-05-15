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
    cookies.set("name", 'admin', { path: "/" })
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
    if (
      users.filter(
        (item) => data.name == item.name && item.password == data.password
      ).length > 0
    ) {
      navigate("/admin/panel");
      cookies.set("name", data.name, { path: "/" });
    }

  };
  return (
    <div>
      {/* <h1>admin</h1>
      <center className=" bg-red-600">
        <h1>login</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input {...register("name", { required: true })} />
          <input {...register("password", { required: true })} />
          
        </form>
      </center> */}
      <div>
            <div className='bg-[#ffffff] flex rounded-[30px] reg_centr'>
                <div className='w-[50%] mt-[40px] px-10 regch_centr'>
                   
                    <h1 className='text-[#252733] text-[27px] font-bold text-center'>Вход в админ панель</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-[50px]">
                        <label >
                            <span className='text-[#101010] text-[14px] font-bold'>E-mail</span>
                            <input {...register("name", { required: true })} className='border border-[#101010] rounded-[8px] w-full h-[42px] px-4 mb-[24px] mt-1' type="text" placeholder='Введите e-mail'/>
                        </label>
                        <label>
                            <span className='text-[#101010] text-[14px] font-bold'>Пароль</span>
                            <input {...register("password", { required: true })} className='border border-[#101010] rounded-[8px] w-full h-[42px] px-4 mb-[24px] mt-1' type="password"  placeholder='Введите пароль'/>
                        </label>
                        <label className='text-center'>
                            <button className='bg-[#101010] text-[#ffffff] w-full rounded-[8px] h-[48px]'>Вход</button>  
                            {/* <input type="submit" />                           */}
                        </label>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
  );
};

export default Admin;
