import { TableCell, TableRow } from "@mui/material";
import React from "react";
import ModalCard from "./ModalCard";
import { useDispatch } from "react-redux";

const TableItem = ({ item, idx }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const editOpen = () => setOpen(true);
  const editClose = () => setOpen(false);

  return (
    <TableRow sx={{ "&:last-child th, &:last-child th": { border: 0 } }}>
      <TableCell align="justify" component="th" scope="row">
        <div className="flex w-[300px]">
          <p className="ml-[10px]">{item?.name}</p>
        </div>
      </TableCell>
      <TableCell
        align="center"
        sx={{ paddingRight: "5%", display: "flex", justifyContent: "end" }}
      >
        <div onClick={() =>{
          editOpen()
          localStorage.setItem('change' ,JSON.stringify(item.DefAnswers) )
        }} className="h-[50px] ">
          <div className="login_btn">
            <p >Изменить</p>
          </div>
        </div>
      </TableCell>

      <ModalCard
        open={open}
        item={item}
        idx={idx}
        editOpen={editOpen}
        editClose={editClose}
      />
    </TableRow>
  );
};

export default TableItem;
