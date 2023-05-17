import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAnswersAPI, getCompanyAPI } from "../features/thunk";
import Cookies from "js-cookie";
import axios from "axios";

const Layout = () => {
  const all = useSelector((state) => state.all.data);
  const answers = useSelector((state) => state.answers.data);
	const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth_status = Cookies.get('userid')


  useEffect(()=>{
    if(!all.length) {
			dispatch(getCompanyAPI())
		}
    if(!answers.length) {
			dispatch(getAnswersAPI())
		}
    })

if(!auth_status) {
  navigate('/')
}else{
  return (
    <div className="w-[80%] max-w-[1728px] mx-auto my-0" >
      <div className="bgall"></div>
      <div className="bgopa"></div>
      <main className="">
        <Outlet />
      </main>
    </div>
);
}

};

export default Layout;
