import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCompanyAPI, getUserAPI } from "../features/thunk";
import Cookies from "js-cookie";
import axios from "axios";

const Layout = () => {
  const all = useSelector((state) => state.all.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth_status = Cookies.get("userid");
  const users = useSelector((state) => state.users.data);
  useEffect(() => {
    if (!users.length) {
      dispatch(getUserAPI());
    }
  });

  useEffect(() => {
    if (!all.length) {
      dispatch(getCompanyAPI());
    }
  });

  return (
    <div className="w-[80%] cont max-w-[1728px] mx-auto my-0">
      <div className="bgall"></div>

      <div className="logo">
        <img src="/Logo.svg" alt="" />
      </div>
      <main className="mt-[0px]">
        <Outlet />
    
      </main>
      <footer className="bgopa px-4 py-2">
        <div className="">
          <h1 className="text-black font-extrabold ">Контактные данные:</h1>
          <div className="flex  flex-col  gap-4">
            <p>ООО «ЛОЯЛ ГИФТ»</p>
            <p>
              <span className="text-black font-bold">Адрес: </span>
              614036, ПЕРМСКИЙ КРАЙ, Р-Н ПЕРМСКИЙ, Г. ПЕРМЬ, УЛ. СИБИРСКАЯ, Д..
              47А КВ./ОФ. ОФИС 506,
            </p>
            <p>
              <span className="text-black font-bold">e-mail:</span>{" "}
              info@teal.band
            </p>
            <p>
              <span className="text-black font-bold">Телефон:</span>{" "}
              <a href="tel:+74994509095">+74994509095</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
