import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ResAnsChild = ({ anses, id, idkey ,idx , peoples }) => {
  

const [lengh, setlengh] = useState();

let dead = Howlengh()

  function Howlengh(){
    let al = 0;
    for (let user of peoples) {
    
      for (let ans of user[idkey][id].answers) {
        if (ans.ansucc) {
              if(idx === ans.idx){
                al++
              }
        }
       
      }
    }
    return al
  }


  return (
    <div className="p-[10px]">
      <hr />
      <p className="mt-[15px]">{anses.title}</p>
      <div className="flex_ans">
        <div className="ans_full">
          <div className="ans_sel" style={{ width: `${Math.round(dead / peoples.length * 100)}%` }}></div>
        </div>
        <div className="ans_info">
          <p className=" whitespace-nowrap"> {Math.round(dead / peoples.length * 100)} %</p>
          <span className=" whitespace-nowrap"> {Howlengh()} отв.</span>
        </div>
      </div>
    </div>
  );
};

ResAnsChild.propTypes = {};

export default ResAnsChild;
