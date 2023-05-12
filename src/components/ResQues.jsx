import React from 'react';
import PropTypes from 'prop-types';
import ResAns from './ResAns';

 const ResQues = ({ quest, id, all }) => {

    // console.log(quest);

    return (
        <div>
            {quest.map((q, ind) => (<ResAns qus={q} all={all} key={ind} index={ind} />))}
        </div>
    );
};

ResQues.propTypes = {};

export default ResQues;