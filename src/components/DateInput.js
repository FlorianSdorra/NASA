import React from 'react';


const DateInput = props => (
  <div className="former">
    <form onSubmit={props.changeDate}>
      <p>Enter a date:</p>
      <input placeholder="YYYY-MM-DD" />
      <input type="submit" />
    </form>
  </div>
  
);
            

export default DateInput;