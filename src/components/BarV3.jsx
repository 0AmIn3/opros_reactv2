import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BarV3 = ({ color, idx, peoples }) => {
  const id = useParams();

  function setLinee() {
    let one = [];
    let two = [];
    let three = [];
    for (let user of peoples) {
      let ques = user[`${id.id.slice(1)}`];
      for (let quest of ques) {
        if (idx === 0) {
          if (ques.indexOf(quest) == 2) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 18) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 3) {
            three.push(quest);
          }
        } else if (idx === 1) {
          if (ques.indexOf(quest) == 16) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 8) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 20) {
            three.push(quest);
          }
        } else if (idx === 2) {
          if (ques.indexOf(quest) == 17) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 19) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 9) {
            three.push(quest);
          }
        } else if (idx === 3) {
          if (ques.indexOf(quest) == 1) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 5) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 11) {
            three.push(quest);
          }
        } else if (idx === 4) {
          if (ques.indexOf(quest) == 4) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 12) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 7) {
            three.push(quest);
          }
        } else if (idx === 5) {
          if (ques.indexOf(quest) == 6) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 0) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 10) {
            three.push(quest);
          }
        } else if (idx === 6) {
          if (ques.indexOf(quest) == 15) {
            one.push(quest);
          } else if (ques.indexOf(quest) == 13) {
            two.push(quest);
          } else if (ques.indexOf(quest) == 14) {
            three.push(quest);
          }
        }
      }
    }
    function changeTotal(arr) {
      let total = 0;
      for (let i of arr) {
        for (let ans of i.answers) {
          if (ans.ansucc) {
            if (ans.idx === 0) {
              total += 1;
            } else if (ans.idx === 1) {
              total += 0.5;
            } else if (ans.idx === 2) {
              total += 0;
            }
          }
        }
      }
      return total / arr.length;
    }


    return Math.round((changeTotal(one) + changeTotal(two) + changeTotal(three)) / 3 *100);
  }

  return (
    <div className="h-[24px] flex w-full">
      <>
        <div
          style={{
            width: `${setLinee() === 0 ? setLinee() + 1 : setLinee()}%`,
            backgroundColor: `${color}`,
          }}
          className="flex w-full h-full"
        ></div>
        <p>{setLinee()}%</p>
      </>
    </div>
  );
};

export default BarV3;
