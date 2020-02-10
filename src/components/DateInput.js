import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => (
  <div className="former">
    <form >
      <DatePicker
      onChange={props.changeDate}
      placeholder="enter date"
      />
      <p>enter a date and show the picture from space regarding your entered date</p>
    </form>
  </div>
  
);
            

export default DateInput;