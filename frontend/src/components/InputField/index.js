import React from "react";
import { Container, Icon, Input } from "./style";

const InputField = ({
  icon,
  iconPadding,
  placeholder,
  value,
  name,
  type,
  handleInputChange,
  padding,
}) => {
  return (
    <Container padding={padding}>
      {icon ? <Icon src={icon} padding={iconPadding} /> : null}
      <Input
        icon={icon ? true : false}
        name={name}
        value={value}
        type={type}
        onChange={(event) => {
          handleInputChange(event);
        }}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default InputField;
