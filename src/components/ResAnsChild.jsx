import React from 'react';
import PropTypes from 'prop-types';

const ResAnsChild = ({ anses, id, all, skok  }) => {
    
    
    function prot_ans(all) {

        for (let user of all) {
            console.log(user);
            if (user.a1.length > 0) {
                for (let as of user.a1) {
                    let all_as = 0
                    for (let ach of as.answers) {
                        if(ach.ansucc === true) {
                            all_as++
                        }
                    }
                    return (all_as / skok) * 100
                }
            }
        }
    }

    function prot_otv(all) {

        for (let user of all) {
            console.log(user);
            if (user.a1.length > 0) {
                for (let as of user.a1) {
                    let all_as = 0
                    for (let ach of as.answers) {
                        if(ach.ansucc === true) {
                            all_as++
                        }
                    }
                    return all_as
                }
            }
        }
    }





    if (id === 0) {
        return (
            <div className="p-[10px]">
                <p className='mt-[15px]'>{anses.title}</p>
                <div className="flex_ans">
                    <div className="ans_full">
                        <div className="ans_sel" style={{width: `${50}%`}}></div>
                    </div>
                    <div className="ans_info">
                        <p>{prot_ans(all)}%</p>
                        <span>{prot_otv(all)} отв.</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="p-[10px]">
                <hr />
                <p className='mt-[15px]'>{anses.title}</p>
                <div className="flex_ans">
                    <div className="ans_full">
                        <div className="ans_sel" style={{width: `${50}%`}}></div>
                    </div>
                    <div className="ans_info">
                        <p>{prot_ans(all)}%</p>
                        <span>{prot_otv(all)} отв.</span>
                    </div>
                </div>
            </div>
        );
    }
};

ResAnsChild.propTypes = {};

export default ResAnsChild;