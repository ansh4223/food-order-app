import React from 'react';
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <lable htmlFor={props.input.id}>{props.label}</lable>
      <input ref={ref} {...props.input}/>
    </div>
  );
});

export default Input;
