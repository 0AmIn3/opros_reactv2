import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postAnswersAPI } from "../features/thunk";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  borderRadius: "10px",
  bgcolor: "background.paper",
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
  
    let opros = {
      id: data.id,
      resultid: data.resultid,
      name: data.name,
      type: data.type,
      DefAnswers: [
        {
          "title": "Вопрос",
          "answers": [
            {
              "title": "Ответ",
              "ansucc": false
            },
            {
              "title": "Ответ",
              "ansucc": false
            },
            {
              "title": "Ответ",
              "ansucc": false
            }
          ]
        }
      ]
    }
    dispatch(postAnswersAPI(opros))
  
    
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
              <p className="text-center text-[30px]">Добавить опрос</p>
              <div className="flex items-center gap-5 w-full mt-[20px]">
                <p className="text-[gray] text-[20px]">https://teal.band/</p>
              <input
                type="text"
                placeholder="ссылка для ваше опроса"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none "
                {...register("id", {required: true})}
              />
              </div>
              <div className="flex items-center gap-5 w-full mt-[20px]">
                <p className="text-[gray] text-[20px]">https://teal.band/</p>
              <input
                type="text"
                placeholder="ссылка для результата опроса"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none "
                {...register("resultid", {required: true})}
              />
              </div>
              <br />
              <input
                type="text"
                placeholder="Название опросника"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none"
                {...register("name", { required: true})}
              />
              <br />
              <select
                type="text"
                placeholder="Выберите тип опроса"
                className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none"
                {...register("type", { required: true })}
              >
                <option value=""  disabled>Выберите тип опроса</option>
                <option value="type1">Вариантами</option>
                <option value="type2">5 звезд</option>
                <option value="type3">6 звезд</option>
              </select>
                
             
              <input type="submit"   className="rounded-[24px] w-full bg-black px-6 py-4 text-[white] outline-none mt-[20px] cursor-pointer"/>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddItem;
