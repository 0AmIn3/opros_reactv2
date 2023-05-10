import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/goods/allSlice";
import { getUsersAPI } from "../features/goods/thunk";
import Cookies from "js-cookie";

const Layout = () => {
  // const goods = useSelector((state) => state.goods.data);
  const all = useSelector((state) => state.all.data);
  // const liked = useSelector((state) => state.liked.data);
	const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log(all);

  const auth_status = Cookies.get('userid')
 


  useEffect(()=>{
    if(!all.length) {
			dispatch(getUsersAPI())
		}
  })

// console.log(all[0].a1);
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
