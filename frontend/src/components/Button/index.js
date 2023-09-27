import React from "react";
import { Btn } from "./style";

/**
 *
 * @param {padding : string, text: string, type: string, width: string, onClic: function}
 * padding -> Padding Value of Button
 * text -> Button Text
 * Type -> can either be "filled" or "outlined"
 * @returns Button Component
 */
const Button = ({ padding, text, type, width, onClick }) => {
  return (
    <Btn width={width} padding={padding} type={type} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default Button;
