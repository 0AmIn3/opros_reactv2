import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

export const SendEmail = ({ arr }) => {
    console.log(arr);
    const href = window.location.href;
    const { copid } = useParams();
    const form = useRef();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.log(data);



        emailjs.sendForm('service_kgpzccn', 'template_4w994q6', data, '8EKNGh-IHITW3kjAU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }




    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);


        emailjs.sendForm('service_kgpzccn', 'template_4w994q6', form.current, '8EKNGh-IHITW3kjAU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <input type="hidden" name="from_name" id="from_name" value={'Lcode'} />
        //     <label>company_name</label>
        //     <input type="text" name="company_name" id="company_name" />
        //     <br />
        // {arr.length > 0
        //     ? arr.map((item,idx) => (
        //       <>  <input type="text" name="links" id="links" key={idx} defaultValue={` ${href.split("/")[0]}://${href.split("/")[2]}/${copid}/result/p${item.id}`} /> <br />
        //       </>
        //     ))
        //     : null
        // }
        //     <br />

        //     <label>reply_to</label>
        //     <input type="text" name="reply_to" id="reply_to" />
        //     <input type="submit" value="Send" />
        // </form>
        <>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-3'>

                <input defaultValue="Lcode" {...register("from_name")} />

                <label>company_name</label>
                <input defaultValue="TealBand," {...register("company_name")} />

                {arr.length > 0
                    ? arr.map((item, idx) => (
                        <>  <input key={idx} defaultValue={` ${href.split("/")[0]}://${href.split("/")[2]}/${copid}/result/p${item.id}`} {...register("links")} /> <br />
                        </>
                    ))
                    : null
                }

                <label>reply_to</label>
                <input type="text" defaultValue="alekstagaev18@gmail.com" {...register("reply_to")}/>
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default SendEmail;