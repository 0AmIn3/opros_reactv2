import React from 'react';
import PropTypes from 'prop-types';

const Quests = ({ item, id, changeAnswer}) => {

    
   


        return (
            <div>
                <hr />
                <div className="p-[10px]"><input type="radio" name="ans" id={id} onChange={() => {
                        changeAnswer(item)
                    }} />
                    <label htmlFor={id}> {item.title} </label>   </div>
            </div>
        );
    
};

// Quests.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
// };

export default Quests;