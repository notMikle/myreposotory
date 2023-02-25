import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export default function InputWithIcon() {
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 0 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="ФИО" variant="standard" />
        </Box>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 0 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <ApartmentOutlinedIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            id="input-with-sx"
            label="Организация"
            variant="standard"
          />
        </Box>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 0 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalPhoneOutlinedIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField id="input-with-sx" label="Телефон" variant="standard" />
        </Box>
      </Box>
    </div>
  );
}
