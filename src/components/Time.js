import React from 'react';


const Time = (props) => {

  let date = new Date().toDateString();

  return(
    <div align="right">
      <h4> {props.text} - { date } </h4>
    </div>  
  )
}



export default Time