import React from "react";
import { Option, Select } from "./style";

const Selection = ({ padding }) => {
  return (
    <Select padding={padding}>
      <Option>English</Option>
      <Option>Hindi</Option>
    </Select>
  );
};

export default Selection;
