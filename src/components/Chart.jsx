import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from "react-router-dom";

const Chart = ({ FillUsers , PersonalResults }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const id = useParams();
  const [BarResults, setBarResults] = useState([]);
  const [BarLabels, setBarLabels] = useState([]);
  const [Colors, setColors] = useState([]);

  useEffect(()=>{
    inds(FillUsers);
  },[PersonalResults])
  const calculatePercentage = (numbers, side) => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const percentages = numbers.map(
      (num) => `${((num / sum) * 100).toFixed(2)}% ${side}`
    );
    return percentages;
  };
  function inds(arr) {
    let white = [];
    let dark = [];
    const uniqueColors = (data) => {
      const colors = data.map((item) => item.color);
      const uniqueColors = Array.from(new Set(colors));

      return uniqueColors;
    };
    let colors = uniqueColors(arr[0][id.id.slice(1)]);
    for (let i of arr) {
      for (let ques of i[id.id.slice(1)]) {
        if (ques.side) {
          white.push(ques);
        } else {
          dark.push(ques);
        }
      }
    }

    function changeColor(colors, arr) {
      // console.log(arr);
      let obj = {};
      let TotalArr = [];
      for (let col of colors) {
        obj[col] = [];
        let total = 0;
        for (let i of arr) {
          if (i.color == col) {
            obj[col].push(i);
          }
        }
        for (let i of obj[col]) {
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
        TotalArr.push(total);
      }

      return TotalArr;
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
      return (total / arr.length) * 100;
    }

    // setWhiteSide(changeColor(colors, white));
    // setDarkSide(changeColor(colors, dark));
    setBarResults([
      ...changeColor(colors, white),
      ...changeColor(colors, dark),
    ]);
    let w = calculatePercentage(changeColor(colors, white), "Светлая сторона");
    let d = calculatePercentage(changeColor(colors, dark), "Темная сторона");
    setBarLabels([...w, ...d]);

    setColors(colors);
  }
  const data = {
    labels: BarLabels,
    datasets: [
      {
        label: "My First Dataset",
        data: BarResults,
        backgroundColor: Colors, 
        hoverBackgroundColor: Colors, 
      },
    ],
  };

  const options = {

    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => "", 
        },
        legend: {
          display: false,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
    // className={
    //   bool
    //     ? "flex w-1/2 flex-col h-full pos1 gap-5 mt-8"
    //     : "flex h-full w-1/2 flex-col pos2 gap-5 mt-8"
    // }
    >
      {/* <h1 className=" text-center font-bold">{whatside}</h1> */}
      <Doughnut className="Doughnut" data={data} options={options} />
    </div>
  );
};

export default Chart;
