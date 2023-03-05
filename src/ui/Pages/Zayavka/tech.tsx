import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import s from "./tech.module.scss";
import Card from "./cardZayavka";

function TabPanel(props: any) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box>
          <div className={s.tabPanel}>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs(props: any) {
  let [state, setState] = React.useState([...props.props.state]);

  let [value, setValue] = React.useState(0);

  function filter(value: number) {
    if (value === 0) {
      setState([...props.props.state]);
    } else {
      let newState = [...props.props.state].filter(
        (i) => i.categoryId === value
      );
      setState(newState);
    }
  }

  let cardElement = state.map((m: any) => (
    <Card
      name={m.name}
      subname={m.subname}
      key={m.id}
      id={m.id}
      price={m.price}
      gusek={m.gusek}
    />
  ));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    filter(newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab className={s.tabPanels} label="Все" />
          <Tab className={s.tabPanels} label="Автовышка" />
          <Tab className={s.tabPanels} label="Автокран" />
          <Tab className={s.tabPanels} label="Кран гусеничный" />
          <Tab className={s.tabPanels} label="Трубоукладчик" />
          <Tab className={s.tabPanels} label="Экскаватор" />
          <Tab className={s.tabPanels} label="Погрузчик" />
          <Tab className={s.tabPanels} label="Бульдозер" />
        </Tabs>
      </Box>
      <div className={s.tabPanel}>
        <TabPanel display={"flex"} value={value} index={0}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {cardElement}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {cardElement}
        </TabPanel>
      </div>
    </div>
  );
}
