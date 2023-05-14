import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti'
const EditAns = ({ answer, ind, deleteans, indarr, changeAnswers }) => {



    return (
        <div className='flex w-full gap-5'>
            <span>{ind}</span>
            <textarea className='ansea bg-[#e6e6e6] p-[7px] rounded-[7px]' onChange={(e)=>{
                changeAnswers(indarr, ind, e.target.value)
            }}>{answer.title}</textarea>
            <TiDeleteOutline className='text-[30px] cursor-pointer text-red-600' onClick={() => {
                console.log(indarr, ind);
                deleteans(indarr, ind)
            }} />
            
        </div>
    );
};


export default EditAns;