import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddItem = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log('sw');
    data = {
      id: uuidv4(),
      title: "Кресло компьютерное игровое Cougar ARMOR One Black-Orange",
      description:
        "Cougar Armor One — игровое компьютерное кресло с высокой спинкой, поддерживающей позвоночник в анатомически правильном положении. Обивка сделана из воздухопроницаемой экокожи. В комплекте есть подушки для шеи и поясницы. За счет стального каркаса эта модель выдерживает нагрузку до 120 кг. Стул оснащен механизмом регулировки высоты «Газлифт». Металлический кожух защищает его от преждевременной поломки. Специальные ручки предназначены для настройки степени сопротивления к раскачиванию и его полной блокировки. Конструкция раскладывается на 180°. Подлокотники поворачиваются вправо и влево, их можно поднимать и опускать.",
      colors: ["black", "orange"],
      isBlackFriday: false,
      media: [
        "https://avatars.mds.yandex.net/i?id=072aa5a23f21ab8da49c67a024bf07fb86153e31-8427500-images-thumbs&n=13",
      ],
      ...data
    };
    
  };

  const [goods, setGoods] = useState();

  // console.log(goods);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" px-4 overflov-hidden flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Add title"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("title", {required: true})}
              />
              <br />
              <input
                type="number"
                placeholder="Add price"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("price", { required: true})}
              />
              <br />
              <input
                type="text"
                placeholder="Add description"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("description", { required: true })}
              />
                <input
                type="text"
                placeholder="Add rating"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("rating", { required: true})}
              />
                <input
                type="text"
                placeholder="Add type"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("type", { required: true })}
              />
              <input
                type="text"
                placeholder="Add sale"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                {...register("salePercentage", {required: true})}
              />
              <input type="submit" />
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddItem;
