import React from "react";
import { Option, Select } from "./style";

const Selection = ({ padding, onChange, optionList }) => {
  return (
    <Select padding={padding} onChange={(event) => onChange(event)}>
      {optionList.map((item) => (
        <Option key={item.id} value={item.value}>
          {item.label.toUpperCase()}
        </Option>
      ))}
    </Select>
  );
};

export default Selection;
