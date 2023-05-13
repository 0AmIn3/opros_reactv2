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
          <img
            className="min-w-[50px] h-[50px] bg-[#2E3A59] rounded-[50%]"
            src={item?.media[0]}
            alt=""
          />
          <p className="ml-[10px]">{item?.title}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="h-[80px] overflow-hidden">
          <p>{item?.description}</p>
        </div>
      </TableCell>
      <TableCell width={150} align="center">
        {item?.price} sum
      </TableCell>
      <TableCell align="center">
        <p className="w-[200px]">{item?.salePercentage}%</p>
      </TableCell>
      <TableCell align="left">
        <div className=" ml-[10px] flex w-[50px] justify-between">
          <img
            onClick={() => {
              dispatch(deleteGoodAPI(item.id));
            }}
            src="/img/delImg.svg"
            alt=""
          />
          <img onClick={handleOpen} src="/img/edit.svg" alt="" />
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
