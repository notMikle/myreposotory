import React, { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";

import style from "./OurTechnique.module.scss";

const OurTechnique = (props: any) => {
  console.log("render");
  // const arrayCheckIds = [{}];
  // const newState = props.state.filter((e) => arrayCheckIds.includes(e.name));

  let [state, setState] = useState([...props.state]);
  let [newItem, setNewItem] = useState(0);
  function filter(item: number) {
    setNewItem(item);
    if (item === 0) {
      setState([...props.state]);
    } else {
      let newState = [...props.state].filter((i) => i.categoryId === item);
      setState(newState);
    }
  }

  // не правильно выводится массив!!!!!!!!!!!!!!!!!!!!!

  let cardElement = state.map((m: any) => (
    <Card
      name={m.name}
      context={m.context}
      key={m.id}
      id={m.id}
      price={m.price}
      quantity={m.quantity}
    />
  ));

  return (
    <div className={style.ourTechnik}>
      <Category
        onClickCategory={(item: number) => filter(item)}
        newItem={newItem}
      />
      <div className={style.cardElement}>{cardElement}</div>
    </div>
  );
};

export default OurTechnique;
