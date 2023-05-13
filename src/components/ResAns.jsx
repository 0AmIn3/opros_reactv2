import React from 'react';
import PropTypes from 'prop-types';
import ResAnsChild from './ResAnsChild';

const ResAns = ({ qus, all, index }) => {
   
    function skok(arr) {
        let skok_chel = 0
        for (let i of arr) {
            if (i.a1.length > 0) {
                skok_chel += 1
            }
        }
        return skok_chel
    }

   

    return (
        <div className='mt-[40px] '>
            <p className='text-[20px] font-bold'>{qus.title}</p>
            <span className='font-bold opacity-50'>Ответили {skok(all)} человека</span>

            <div className="quest_box">
                {
                    qus.answers.map((it, ind) => (<ResAnsChild anses={it} id={ind} all={all} key={ind} skok={skok(all)} />))
                }
            </div>
        </div>
    );
};

ResAns.propTypes = {};

export default ResAns;