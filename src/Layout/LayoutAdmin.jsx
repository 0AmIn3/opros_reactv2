import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCompanyAPI } from "../features/thunk";
import Cookies from "js-cookie";
import axios from "axios";

const LayoutAdmin = () => {
  const all = useSelector((state) => state.all.data);
	const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    if(!all.length) {
			dispatch(getCompanyAPI())
		}

    })


  return (
    <div className="w-[80%] max-w-[1728px] mx-auto my-0" >
      <div className="bgall"></div>
      <main className="">
        <Outlet />
      </main>
    </div>
);


};

export default LayoutAdmin;
