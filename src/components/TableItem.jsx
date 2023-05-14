import { TableCell, TableRow } from "@mui/material";
import React from "react";
import ModalCard from "./ModalCard";
import { useDispatch } from "react-redux";

const TableItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="justify" component="th" scope="row">
        <div className="flex w-[300px] m-auto">
          <p className="ml-[10px]">{item?.title}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="h-[80px] overflow-hidden">
          <p>Войти</p>
        </div>
      </TableCell>

      <ModalCard
        open={open}
        item={item}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </TableRow>
  );
};

export default TableItem;
