import React from 'react';

const Student = (props) => {
  return (
    <div>
      {props.students.map( (student) => 
        <div>
          <h1>{student.name}</h1>
          <h3>{student.bio}</h3>
          <Score />
        </div> )}
    </div>

  )
}

export default Student