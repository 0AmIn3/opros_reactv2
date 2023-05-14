import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ResAnsChild = ({ anses, id, all, idkey , skok }) => {
  

const [lengh, setlengh] = useState();
let dead = Howlengh()

  function Howlengh(){
    let al = 0;
  
    for (let user of skok) {
     
      for (let ans of user[idkey][id].answers) {
        if (ans.ansucc) {
             
              if(ans.title == anses.title){
                al++
              }
        }
       
      }
    }
    return al
  }

  useEffect(() => {
 

  });
  return (
    <div className="p-[10px]">
      <hr />
      <p className="mt-[15px]">{anses.title}</p>
      <div className="flex_ans">
        <div className="ans_full">
          <div className="ans_sel" style={{ width: `${Math.round(dead / skok.length * 100)}%` }}></div>
        </div>
        <div className="ans_info">
          <p> {Math.round(dead / skok.length * 100)} %</p>
          <span> {Howlengh()} отв.</span>
        </div>
      </div>
    </div>
  );
};

ResAnsChild.propTypes = {};

export default ResAnsChild;
