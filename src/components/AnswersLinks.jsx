import React from "react";
import { Link, useParams } from "react-router-dom";

const AnswersLinks = ({ idx, item, setHref, setModal }) => {
  const href = window.location.href;
  const { copid } = useParams();

  return (
    <div className="borders">
      <button
        className="w-[210px] p-3 bg-[#C7FFAC] rounded-md font-medium outline-none   button"
        data-btn={idx}
        onClick={() => {
          setModal(true);
          setHref(
            ` ${href.split("/")[0]}://${href.split("/")[2]}/${copid}/poll/${
              item.id
            }`
          );
        }}
      >
        {item.name}
        {/* <Link to={`/${copid}/poll/${item.id}`}></Link> */}
      </button>
      {/* <div className="links" style={{ display: "flex" }}>
        <h3>{` ${href.split("/")[0]}://${href.split("/")[2]}/${copid}/poll/${
          item.id
        }`}</h3>
      </div> */}
    </div>
  );
};

export default AnswersLinks;
