import React from "react";
import { Link } from "react-router-dom";

const Companyes = ({ item }) => {
  return (
    <div className="flex gap-7 w-full justify-between">
      <p>{item.name}</p>
      <p> {item.email} </p>
      <Link to={'/nedminRegister/panel/' + item.id}>
        <p className=" p-3 bg-[#C7FFAC] cursor-pointer   rounded-md font-medium outline-none   button">
          Изменить{" "}
        </p>
      </Link>
    </div>
  );
};

export default Companyes;
