import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ResAnsChild from './ResAnsChild';

const ResAns = ({ qus, all, index , idkey }) => {



useEffect(()=>{
})
    return (
        <div className='mt-[80px] res_top'>
            <p className='text-[20px] font-bold'>{qus.title}</p>
            <span className='font-bold opacity-50'>Ответили {all.length} человека</span>

            <div className="quest_box">
                {
                    qus.answers.map((it, ind) => (<ResAnsChild anses={it} idkey ={idkey} id={index} all={all} key={ind} skok={all} />))
                }
            </div>
        </div>
    );
};

ResAns.propTypes = {};

export default ResAns;