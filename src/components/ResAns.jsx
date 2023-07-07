import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ResAnsChild from './ResAnsChild';
import { useParams } from 'react-router-dom';

const ResAns = ({ qus, all, index , idkey }) => {
    const cop = useParams()
    const peoples = all.filter(item => item.companyid == cop.copid )


    return (
        <div className='mt-[80px] res_top'>
            <p className='text-[20px] font-bold'>{qus.title}</p>
            <span className='font-bold opacity-50'> Количество ответов ({peoples.length}) </span>

            <div className="quest_box">
                {
                    qus.answers.map((it, ind) => (<ResAnsChild idx={ind} anses={it} idkey ={idkey} id={index} all={all} key={ind} peoples={peoples} />))
                }
            </div>
        </div>
    );
};

ResAns.propTypes = {};

export default ResAns;