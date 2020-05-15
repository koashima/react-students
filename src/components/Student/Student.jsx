import React from 'react';
import Score from '../Score/Score'

const Student = (props) => {
  return (
    <div>
      {props.students.map( (student) => 
        <div>
          <h1>{student.name}</h1>
          <h3>{student.bio}</h3>
          <Score score={student.scores} />
        </div> )}
    </div>

  )
}

export default Student