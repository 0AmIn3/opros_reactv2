import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";

export const SendEmail = ({ arr, item }) => {
  const href = window.location.href;
  const { copid } = useParams();
  const form = useRef();
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_kgpzccn",
        "template_4w994q6",
        form.current,
        "8EKNGh-IHITW3kjAU"
      )
      .then(
        (result) => {
          result.text;
          localStorage.setItem(`${item.email}`, "sended");
        },
        (error) => {
          error.text;
        }
      );
  };

  useEffect(() => {
    if (
      localStorage.getItem(`${item.email}`) !== "sended" ||
      !localStorage.getItem(`${item.email}`)
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
        defaultValue={"Lcode"}
      />
      <label>company_name</label> <br />
      <input
        type="text"
        name="company_name"
        id="company_name"
        defaultValue={item.name}
      />
      <br />
      {arr.length > 0
          ? arr.map((item, idx) => (
              <div key={idx}>
                <input
                  type="text"
                  name="links"
                  id="links"
                  defaultValue={`Ссылка на опрос ${idx + 1} : ${
                    href.split("/")[0]
                  }://${href.split("/")[2]}/${copid}/result/p${item.id} `}
                />
                <br />
              </div>
            ))
          : null}
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
    // <>
    //     <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-3'>

    //         <input defaultValue="Lcode" {...register("from_name")} />

    //         <label>company_name</label>
    //         <input defaultValue="TealBand," {...register("company_name")} />

    //         {arr.length > 0
    //             ? arr.map((item, idx) => (
    //                 <>  <input key={idx} defaultValue={` ${href.split("/")[0]}://${href.split("/")[2]}/${copid}/result/p${item.id}`} {...register("links")} /> <br />
    //                 </>
    //             ))
    //             : null
    //         }

    //         <label>reply_to</label>
    //         <input type="text" defaultValue="alekstagaev18@gmail.com" {...register("reply_to")}/>
    //         <input type="submit" value="Send" />
    //     </form>
    // </>
  );
};

export default SendEmail;
