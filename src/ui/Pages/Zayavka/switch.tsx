import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    // (event.target.checked)
  };
  function func_b(e: any) {
    e.stopPropagation();
    e.cancelBubble = true; // для IE
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      onClick={func_b}
    />
  );
}
