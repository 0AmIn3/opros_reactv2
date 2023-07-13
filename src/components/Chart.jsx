import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Chart = ({
  sideW,
  sideD,
  Colors,
  whatside,
  CopSideW,
  CopSideD,
  bool,
  BarResults,
  BarLabels,
}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: BarLabels,
    datasets: [
      {
        label: "My First Dataset",
        data: BarResults, // Ваши значения в процентах
        backgroundColor: Colors, // Цвета секторов диаграммы
        hoverBackgroundColor: Colors, // Цвета при наведении
      },
    ],
  };

  const options = {
    // cutout: "50%", // Разделение на половины
    // rotation: bool ? 180 : 0, // Поворот графика на 180 градусов (для разделения на верхнюю и нижнюю половины)
    // circumference: 180, // Ограничение до половины окружности
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => "", // Очищаем значения подсказки
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
