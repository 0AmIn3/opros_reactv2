import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import TableItem from "../components/TableItem";
import AddItem from "../components/AddItem";
import HedAdmin from "../components/HedAdmin";

const AdminPanel = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const answers = useSelector((state) => state.all.data);

  const dispatch = useDispatch();
  // const [arr, setArr] = useState(goods);
  // useEffect(() => {
  //   if (!goods.length) {
  //     dispatch(getGoodAPI());

  //   }
  // }, [goods]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[ser , setSer] = useState('');
  const[fiil , setFill] = useState('');
  useEffect(() => {

    console.log(answers);
  }, [])
  return (
    <div>
      <HedAdmin />
      <main className="mt-[30px] px-[24px]">
        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center mb-[15px]">
            
            
          </div>

          <button
            onClick={handleOpen}
            className="bg-[#2E3A59] rounded-[20px] text-[#fff] ml-[30px] px-10  py-3"
          >
            Add
          </button>
        </div>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, userSelect: "none" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ background: "#EFF0F4", display: "flex", justifyContent: "space-between", padding: "0px 100px" }}>
                <TableCell align="center">Опросники</TableCell>
                <TableCell align="center">Вход</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {answers.length > 0 && ser.length === 0
                ? answers.map((item, inx) => <TableItem key={inx} item={item} />)
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        <AddItem
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </main>
    </div>
  );
};

export default AdminPanel;
