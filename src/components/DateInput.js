import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => (
  <div className="former">
    <form >
      <p>Enter a date:</p>
      <DatePicker
      selected={props.date}
      onChange={props.changeDate}
      format='yyyy-MM-dd'
      />
    </form>
  </div>
  
);
            

export default DateInput;