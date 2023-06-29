import React, { useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";
// import nodemailer from "nodemailer";
export const SendEmail = ({ arr, item }) => {
  const href = window.location.href;
  const { copid } = useParams();
  const form = useRef();
  const sendEmail = (e) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aminfedya2888@gmail.com",
        pass: "jcwlgbeeqvgrmxdx",
      },
    });
    const mailOptions = {
      from: "aminfedya2888@gmail.com",
      to: "aminfedya2888@gmail.com",
      subject: "Nodemailer test msg",
      text: "привет бро",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("ошибка", error);
      } else console.log("email отправлен: " + info.response);
    });

  };

  useEffect(() => {
    if (
      localStorage.getItem(`${copid}/${item.email}`) !== "sended" ||
      !localStorage.getItem(`${copid}/${item.email}`)
    ) {
      setTimeout(() => {
        sendEmail();
      }, 1000);
    }
  }, [copid]);
  return (
    <form ref={form} className=" fixed top-[-100%]">
      <input
        type="hidden"
        name="from_name"
        id="from_name"
        defaultValue={"Tail.Band"}
      />
      <label>company_name</label> <br />
      <input
        type="text"
        name="company_name"
        id="company_name"
        defaultValue={item.name}
      />
      <br />
      <input
        type="text"
        name="link1"
        id="link1"
        defaultValue={`Ссылки №1 : Ссылка на опрос ${
          href.split("/")[2]
        }/${copid}/poll/${arr[0].id} , Ссылка на результаты опросса ${
          href.split("/")[2]
        }/${copid}/result/p${arr[0].id}`}
      />
      <br />
      <input
        type="text"
        name="link2"
        id="link2"
        defaultValue={`Ссылки №2 : Ссылка на опрос ${
          href.split("/")[2]
        }/${copid}/poll/${arr[1].id} , Ссылка на результаты опросса ${
          href.split("/")[2]
        }/${copid}/result/p${arr[1].id}`}
      />
      <br />
      <input
        type="text"
        name="link3"
        id="link3"
        defaultValue={`Ссылки №3 : Ссылка на опрос ${
          href.split("/")[2]
        }/${copid}/poll/${arr[2].id} , Ссылка на результаты опросса ${
          href.split("/")[2]
        }/${copid}/result/p${arr[2].id}`}
      />
      <br />
      <label>reply_to</label>
      <br />
      <input
        type="text"
        defaultValue={item.email}
        name="reply_to"
        id="reply_to"
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default SendEmail;
