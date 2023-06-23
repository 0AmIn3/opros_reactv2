import React from 'react';
import { useDispatch } from 'react-redux';
import { changeOpros } from '../features/CompanySlice';

const Star = ({title,item , changeAnswer ,quest, changes}) => {
    return (
    

        <>
        {title.ansucc ? 
         <div onClick={() => {
            changes()
            changeAnswer(title)
        }} className=' select-none cursor-pointer p-4 starBorder w-[62px] h-[62px] bg-[#77dddf] flex items-center justify-center'  >
            <p className=' text-2xl'>   {title?.title}</p>
        </div>
        :
        <div onClick={() => {
            changes()
            changeAnswer(title)
        }} className='  select-none cursor-pointer p-4 starBorder w-[62px] h-[62px] flex items-center justify-center'  >
            <p className=' text-2xl'>   {title?.title}</p>
        </div>    
    }
       
        </>



    );
};

export default Star;