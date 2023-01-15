import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface Item {
  label: String;
  value: String;
}

interface MultiSelectInputProps {
  items: any[];
  values: any[];
  open: boolean;
  placeholder: string;
}

export default function MultiSelectInput(props: MultiSelectInputProps) {
  const [open, setOpen] = useState(props.open);
  const [value, setValue] = useState(props.values);
  const [items, setItems] = useState(props.items);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="DARK"
      multiple={true}
      mode="BADGE"
      placeholder={props.placeholder}
      badgeDotColors={[
        "#e76f51",
        "#00b4d8",
        "#e9c46a",
        "#e76f51",
        "#8ac926",
        "#00b4d8",
        "#e9c46a",
      ]}
    />
  );
}
