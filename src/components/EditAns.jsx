import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti'
const EditAns = ({ answer, ind, deleteans, indarr, changeAnswers }) => {



    return (
        <div className='flex w-full gap-5'>
            <span>{ind + 1}</span>
            <textarea className='ansea bg-[#e6e6e6] p-[7px] rounded-[7px]' defaultValue={answer.title} onChange={(e)=>{
                changeAnswers(indarr, ind, e.target.value)
            }}></textarea>
            <TiDeleteOutline className='text-[30px] cursor-pointer text-red-600' onClick={() => {
                deleteans(indarr, ind)
            }} />
            
        </div>
    );
};


export default EditAns;