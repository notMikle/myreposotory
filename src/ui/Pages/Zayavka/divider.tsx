import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function MiddleDividers() {
  let [color, setColor] = useState("default");
  let handleClick = setColor("primary");
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Box sx={{}}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography component="div">от</Typography>
          </Grid>
          <Grid item>
            <Typography component="div">$4.50</Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Дополнительное оборудование
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 1 }}>
        <Stack direction="row" spacing={1}>
          <Chip label="Гусек" color="primary" />
        </Stack>
      </Box>
      <Box sx={{}}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  );
}
