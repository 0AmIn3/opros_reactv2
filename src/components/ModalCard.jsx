import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import EditQuest from "./EditQuest";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "600px",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  overflow: "scroll"
};

const ModalCard = ({ item, open, editClose }) => {
  // console.log(good);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log(newarr);
  };


  const [newarr, setNewarr] = useState(item.DefAnswers);


  function delQuest(ind) {
    const meganewarr = [...newarr];
    meganewarr.splice(ind, 1);
    setNewarr(meganewarr);
    console.log(newarr, ind);

  }

  function deleteans(arrInd, ansInd) {
    const meganewarr = [...newarr];
    const updatedArr = {
      ...meganewarr[arrInd],
      answers: meganewarr[arrInd].answers.filter((_, index) => index !== ansInd),
    };
    meganewarr[arrInd] = updatedArr;
    setNewarr(meganewarr);
  }


  function changeQuest(ind, title) {
    const meganewarr = [...newarr];
    const newQuest = { ...meganewarr[ind], title: title };
    meganewarr[ind] = newQuest;
    setNewarr(meganewarr);
  }

  function changeAnswers(arrInd, ind, title) {
    const meganewarr = [...newarr];
    const newAnswer = { ...meganewarr[arrInd].answers[ind], title: title };
    meganewarr[arrInd].answers[ind] = newAnswer;
    setNewarr(meganewarr);
  }
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={editClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='nonescroll' >
            <Typography id="transition-modal-title" variant="h6" component="h2" className="text-center">
              {item.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" px-4 overflov-hidden"
              >

                {
                  newarr.map((quest, ind) => <EditQuest quest={quest} num={ind} delQuest={delQuest} deleteans={deleteans} setNewarr={setNewarr} newarr={newarr} key={ind} changeQuest={changeQuest} changeAnswers={changeAnswers} />)
                }

                <button className="rounded-[24px] w-full bg-[#c7ffac] px-6 py-4 text-[black] font-bold outline-none mt-[20px] cursor-pointer" onClick={() => {
                  let newq =
                  {
                    "title": "Вопрос",
                    "succ": false,
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
                  const megaquest = [...newarr];
                  megaquest.push(newq)
                  setNewarr(megaquest);
                }} >Добавить новый вопрос</button>

                <input type="submit" value="сохранить" className="rounded-[24px] w-full bg-black px-6 py-4 text-[white] outline-none mt-[20px] cursor-pointer" />
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalCard;
