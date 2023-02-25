import React, { useState } from "react";
import style from "./zayavka.module.scss";
import TextField from "@mui/material/TextField";
import VerticalLinearStepper from "./steper";

const Zayavka = (props: any) => {
  let technik = [...props.state].map((m: any) => (
    <option value={m.id}>{m.name}</option>
  ));
  let [organization, setOrganization] = useState("");
  let [person, setPerson] = useState("");
  let [numberOfPhone, setNumberOfPhone] = useState("");
  return (
    <>
      <VerticalLinearStepper state={props.state} />
      {/* <div className={style.oneStep}>
        <h2>Шаг 1</h2>
        <h3>(выберите технику)</h3>
        <select className={style.select}>
          <option value="0">Выбрать технику:</option>
          {technik}
        </select>
        сделать выбор техники по категориям а потом по модели
      </div>
      <div className={style.twoStep}>Шаг 2 (дата и время аренды)</div>
      <div className={style.twoStep}>
        <h2>Шаг 3 (заполните заявку)</h2>
        <input
          className={style.input}
          placeholder="Организация"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <input
          className={style.input}
          placeholder="Ответственное лицо"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <input
          className={style.input}
          placeholder="Номер телефона"
          value={numberOfPhone}
          onChange={(e) => setNumberOfPhone(e.target.value)}
        />
        после ввода сделать отправку формы в почту
      </div> */}
    </>
  );
};

export default Zayavka;
