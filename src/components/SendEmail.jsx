import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SendEmail = ({ arr, item }) => {
  const href = window.location.href;
  const { copid } = useParams();
  const form = useRef();
  const handleSubmit = () => {
    event.preventDefault();
    const data = {
      reply_to: form.current.elements.reply_to.value,
      subject: "Новое сообщение от Teal.Band",
      company_name: form.current.elements.company_name.value,
      link1: form.current.elements.link1.value,
      link2: form.current.elements.link2.value,
      link3: form.current.elements.link3.value,
    };

    axios
    .post("./email.php", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data + " THIS IS WORK!!!");
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    handleSubmit()
    if (
      localStorage.getItem(`${copid}/${item.email}`) !== "sended" ||
      !localStorage.getItem(`${copid}/${item.email}`)
    ) {
    }
  }, [copid]);

  return (
    <form ref={form} onSubmit={handleSubmit} className="fixed top-[-100%]">
      <input
        type="hidden"
        name="from_name"
        id="from_name"
        defaultValue={"Teal.Band"}
      />
      <input
        type="text"
        name="company_name"
        id="company_name"
        defaultValue={item.name}
      />
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
      <input
        type="text"
        name="reply_to"
        id="reply_to"
        defaultValue={item.email}
      />
    </form>
  );
};

export default SendEmail;
