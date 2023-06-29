import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminChangeItem from "../components/AdminChangeItem";
import AdminModal from "../components/AdminModal";
import { IoCloseSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import axios from "axios";

const AdminChange = () => {
  const all = useSelector((state) => state.all.data);
  let CompanyId = useParams().id;
  const logAll = useSelector((state) => state.all.status);
  const logSample = useSelector((state) => state.sample.status);
  const [Quests, setQuests] = useState([]);
  const [Modal, setModal] = useState(false);
  const [type, setType] = useState(false);
  const [changeType, setChangeType] = useState("");
  const [QuestIdx, setQuestIdx] = useState(0);
  const sample = useSelector((state) => state.sample.data);
  const [AllQuents, setAllQuents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://tealband-4afc1-default-rtdb.firebaseio.com/admin.json")
      .then((res) => {
        let user = res.data[0];
        if (
          user.email + user.password !== Cookies.get("key") ||
          !Cookies.get("key") ||
          Cookies.get("key") == ""
        ) {
          navigate("/");
        }
      });
    // if (CompanyId === "sample" && sample.length > 0) {
    // } else if (all.length > 0) {
    // }
    CompanyId === "sample" && sample.length > 0
      ? setAllQuents(sample[0].questions)
      : setAllQuents(all.filter((item) => item.id === CompanyId)[0]?.questions);
  });

  function saveBtn(idx) {
    let save = document.querySelectorAll("#save");

    save.forEach((item) => {
      item.style.display = "none";
    });
    save[idx].style.display = "block";
  }
  return (
    <div className="answers pt-[100px] gap-3  bg-white relative">
      <Link to={"/nedminRegister/panel"}>
        <div className="absolute right-[30px] top-[20px] close_btn">
          <IoCloseSharp />
        </div>
      </Link>
      <div className="flex flex-col gap-4">
        {/* {CompanyId === "sample"} */}
        {logAll == "fulfilled" && all.length > 0 && CompanyId !== "sample"
          ? all
              .filter((item) => item.id === CompanyId)[0]
              .questions.map((item, idx) => (
                <AdminChangeItem
                  key={idx}
                  idx={idx}
                  saveBtn={saveBtn}
                  setModal={setModal}
                  setQuests={setQuests}
                  setType={setType}
                  item={item}
                  setQuestIdx={setQuestIdx}
                  setChangeType={setChangeType}
                />
              ))
          : null}
        {logSample == "fulfilled" && sample.length > 0 && CompanyId === "sample"
          ? sample
              .filter((item) => item.id === CompanyId)[0]
              .questions.map((item, idx) => (
                <AdminChangeItem
                  key={idx}
                  idx={idx}
                  saveBtn={saveBtn}
                  setModal={setModal}
                  setQuests={setQuests}
                  setType={setType}
                  item={item}
                  setQuestIdx={setQuestIdx}
                  setChangeType={setChangeType}
                />
              ))
          : null}
      </div>

      {Modal ? (
        <AdminModal
          setModal={setModal}
          QuestIdx={QuestIdx}
          type={type}
          changeType={changeType}
          allQuests={AllQuents}
          arr={Quests}
        />
      ) : null}
    </div>
  );
};

export default AdminChange;
