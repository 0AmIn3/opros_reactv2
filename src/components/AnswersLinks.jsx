import React from "react";
import { Link } from "react-router-dom";

const AnswersLinks = ({handleClick , idx ,item }) => {
  return (
    <div className="borders">
      <button
        className="w-full p-3 bg-[#C7FFAC] rounded-md font-medium outline-none   button"
        data-btn={idx}
        onClick={(e) => handleClick(e.target)}
      >
        {item.name}
      </button>

      <div className="links" style={{ display: "none" }}>
        <Link to={`/home/socialpoll/${item.id}`}>
          <h3>Прохождение диагностики</h3>
        </Link>
        <Link to={`/home/socialpollresult/${item.resultid}`}>
          <h3>Отчет по диагностике</h3>
        </Link>
      </div>
    </div>
  );
};

export default AnswersLinks;
