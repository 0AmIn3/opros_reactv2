import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ResAnsChild = ({ anses, id, all, skok }) => {


  //   console.log(id);
    
  // console.log(all.filter(item => item.a1.length> 0));
  function prot_ans(all) {

      for (let user of all) {
          // console.log(user);
          if (user.a1.length > 0) {
              for (let as of user.a1) {
                  let all_as = 0
                  console.log(all_as);
                  for (let ach of as.answers) {
                      if(ach.ansucc === true) {
                          all_as++
                      }
                  }
                  return (all_as / skok) * 100
              }
          }
      }
  }
useEffect(()=> {
console.log(  prot_ans(all));
})
  // function prot_otv(all) {

  //     for (let user of all) {
  //         // console.log(user);
  //         if (user.a1.length > 0) {
  //             for (let as of user.a1) {
  //                 let all_as = 0
  //                 for (let ach of as.answers) {
  //                     if(ach.ansucc === true) {
  //                         all_as++
  //                     }
  //                 }
  //                 return all_as
  //             }
  //         }
  //     }
  // }


  return (
    <div className="p-[10px]">
      <hr />
      <p className="mt-[15px]">{anses.title}</p>
      <div className="flex_ans">
        <div className="ans_full">
          <div className="ans_sel" style={{ width: `${50}%` }}></div>
        </div>
        <div className="ans_info">
          <p> %</p>
          <span> отв.</span>
        </div>
      </div>
    </div>
  );
};

ResAnsChild.propTypes = {};

export default ResAnsChild;
