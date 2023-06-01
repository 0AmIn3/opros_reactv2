import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyAPI, getCompanyAPI } from "../features/thunk";
import Companyes from "../components/Companyes";
import axios from "axios";
import Cookies from "js-cookie";
import { IoCloseSharp } from "react-icons/io5";

const AdminPanel = () => {
  const navigate = useNavigate();
  const all = useSelector((state) => state.all.data);
  // const [CompanyCop, setCompanyCop] = useState([...all]);
  const dispatch = useDispatch();
  const logAll = useSelector((state) => state.all.status);
  const [DeleteKey, setDeleteKey] = useState("");
  const [Modal, setModal] = useState(false);
  const [USer, setUSer] = useState(null);
  
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
  });
  useEffect(() => {
    if (!all.length) {
      dispatch(getCompanyAPI());
    }
  });
  return (
    // <div>
    //   <HedAdmin />
    //   <main className="mt-[30px] px-[24px]">
    //     <div className="flex items-center justify-between mb-[15px]">
    //       <div className="flex items-center mb-[15px]"></div>

    //       <button
    //         onClick={handleOpen}
    //         className="bg-black rounded-[10px] text-[#fff] ml-[30px] px-10  py-3"
    //       >
    //         Добавить
    //       </button>
    //     </div>

    //     <TableContainer component={Paper}>
    //       <Table
    //         sx={{ userSelect: "none" }}
    //         aria-label="simple table"
    //       >
    //         <TableHead>
    //           <TableRow
    //             sx={{
    //               background: "#EFF0F4",

    //               padding: "0px 100px",
    //             }}
    //           >
    //             <TableCell align="center">Опросники</TableCell>
    //             <TableCell align="right">
    //               Изменить опрос

    //             </TableCell>

    //           </TableRow>

    //         </TableHead>

    //         <TableBody>
    //           {answers.length > 0 && ser.length === 0
    //             ? answers.map((item, inx) => (
    //                 <TableItem key={inx} idx={inx} item={item} />
    //               ))
    //             : null}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //     <AddItem
    //       open={open}
    //       handleOpen={handleOpen}
    //       handleClose={handleClose}
    //     />
    //   </main>
    // </div>
    <>
      {Modal ? (
        <div className="">
          <div className="  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white modalDelete flex px-6 flex-col gap-11  py-10 justify-center">
            <h1>Вы дейстительно хотите удалить компанию "{USer.name}" ?</h1>
            <div className="flex gap-4 mx-auto">
              <p onClick={()=>{
                setModal(false)
              }} className=" p-3 bg-[#C7FFAC] cursor-pointer   rounded-md font-medium outline-none   button">
                Отменить
              </p>
              <p onClick={()=>{
                dispatch(deleteCompanyAPI(DeleteKey))
                if(logAll == "fulfilled"){
                  setModal(false)
                  setTimeout(()=>{
                    window.location.reload(false);
                  },500)

                
                }
              }}  className=" p-3 bg-[#f92727de] cursor-pointer text-white   rounded-md font-medium outline-none   button">
                Удалить
              </p>
            </div>
          </div>
          <div className="modalHomeBg"></div>
        </div>
      ) : null}
      <div className="flex justify-center gap-5 mt-[200px] p-3 rounded-2xl relative bg-white h-auto flex-col w-full items-center ">
        {logAll == "fulfilled" && all.length > 0
          ? all.map((item, idx) => (
              <Companyes
                item={item}
                setModal={setModal}
                setDeleteKey={setDeleteKey}
                key={idx}
                setUSer={setUSer}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default AdminPanel;
