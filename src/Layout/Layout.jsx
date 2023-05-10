import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/goods/allSlice";
import { getUsersAPI } from "../features/goods/thunk";

const Layout = () => {
  // const goods = useSelector((state) => state.goods.data);
  const all = useSelector((state) => state.all.data);
  // const liked = useSelector((state) => state.liked.data);
	const dispatch = useDispatch();
  // console.log(all);

  useEffect(()=>{
    if(!all.length) {
			dispatch(getUsersAPI())
      
		}
  })

// console.log(all[0].a1);

  return (
        <div className="w-[80%] max-w-[1728px] mx-auto my-0" >
          <div className="bgall"></div>
          <div className="bgopa"></div>
          <main className="">
            <Outlet />
          </main>
        </div>
  );
};

export default Layout;
