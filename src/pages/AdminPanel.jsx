import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAPI } from "../features/thunk";
import Companyes from "../components/Companyes";
import axios from "axios";
import Cookies from "js-cookie";

const AdminPanel = () => {
  const navigate = useNavigate();
  const all = useSelector((state) => state.all.data);
  // const [CompanyCop, setCompanyCop] = useState([...all]);
  const dispatch = useDispatch();
  const logAll = useSelector((state) => state.all.status);
  useEffect(() => {
    axios
      .get("https://tealband-4afc1-default-rtdb.firebaseio.com/admin.json")
      .then((res) => {
        let user = res.data[0];
        if (user.email + user.password !== Cookies.get("key") || !Cookies.get("key") || Cookies.get("key") == '') {
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
      <div className="flex justify-center gap-5 mt-[200px] p-3 rounded-2xl relative bg-white h-auto flex-col w-full items-center ">
        {logAll == "fulfilled"
          ? all.map((item, idx) => <Companyes item={item}  key={idx}  />)
          : null}
      </div>
    </>
  );
};

export default AdminPanel;
