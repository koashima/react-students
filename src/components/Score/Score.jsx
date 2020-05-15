import React from 'react';

const Score = ({score}) => (
  <div>
    <h4>{score.map( (s) => <div> Scored {s.score} on {s.date} </div>  )}</h4>

  </div>
) 

export default Score;