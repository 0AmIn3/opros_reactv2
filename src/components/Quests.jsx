import React from 'react';
import PropTypes from 'prop-types';

const Quests = ({title, id}) => {
    return (
        <div>
            <input type="radio" name="ans" id={id} />
            <label htmlFor={id}> {title} </label>   
        </div>
    );
};

Quests.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Quests;