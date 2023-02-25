import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import s from "./tech.module.scss";
import Card from "./cardZayavka";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div className={s.tabPanel}>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: any) {
  debugger;
  let cardElement = props.props.state.map((m: any) => (
    <Card name={m.name} key={m.id} id={m.id} price={m.price} />
  ));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className={s.tabPanel} label="Автокран" {...a11yProps(0)} />
          <Tab label="Гeсеничный кран" {...a11yProps(1)} />
          <Tab label="Экскаватор" {...a11yProps(2)} />
          <Tab label="Трубоукладчик" {...a11yProps(3)} />
          <Tab label="Автогидроподъемник" {...a11yProps(4)} />
          <Tab label="Item Three" {...a11yProps(5)} />
          <Tab label="Item Three" {...a11yProps(6)} />
          <Tab label="Item Three" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <div className={s.tabPanel}>
        <TabPanel display={"flex"} value={value} index={0}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}
