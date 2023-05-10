import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ResultV1 = () => {
  
  
  
    return (
      <>
   
      <div className="answers  relative bg-white">
      <Link to={"/home"}>
        <div className="absolute right-[30px] top-[20px] close_btn">
          <IoCloseSharp />
        </div>
      </Link>


       
      </div>
    </>
    );
};

export default ResultV1;