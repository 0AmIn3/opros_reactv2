import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Companyes = ({ item , setDeleteKey ,setModal,setUSer}) => {
  const all = useSelector((state) => state.all.data);
  const allKey = useSelector((state) => state.all.userKey);
  function getKey() {
    return Object.keys(allKey)[
      all.indexOf(all.filter((i) => i.id === item.id)[0])
    ];
  }

  return (
    <div className=" w-full  mt-5">
     <div className="flex AdminCompanies gap-7 w-full justify-between">
     <p>{item.name}</p>
      <p> {item.email} </p>
      <div className="flex gap-5">
        <Link to={"/nedminRegister/panel/" + item.id}>
          <p className=" p-3 bg-[#C7FFAC] cursor-pointer   rounded-md font-medium outline-none   button">
            Изменить
          </p>
        </Link>
        <p onClick={()=>{
          setDeleteKey(getKey())
          setUSer(item)
          setModal(true)
        }} className=" p-3 bg-[#f92727de] cursor-pointer text-white   rounded-md font-medium outline-none   button">
          Удалить
        </p>
      </div>
     </div>
     <hr className=" mt-5" />
    </div>
  );
};

export default Companyes;
