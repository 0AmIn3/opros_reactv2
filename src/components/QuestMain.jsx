import React from 'react';
import Quests from './Quests';

const QuestMain = ({quest ,nowq }) => {
    return (
        <div>
        <p className='q_title'>{quest[nowq].title}</p>
        <p className='er_q' style={{display: "none"}} >Выберите один из вариантов!</p>
        

          <div className="ans_fromq">
            {
              quest[nowq].answers.map((answer, index) => (
                  
                   <Quests title={answer.title} id={index} key={index} />
              )
              )
            }
          </div>
        </div>
    );
};

export default QuestMain;