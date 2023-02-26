import React, { useState } from "react";
import style from "./cardZayavka.module.scss";
import avatar from "../../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import MiddleDividers from "./divider";
import { Chip } from "@mui/material";
import ControlledSwitches from "./switch";

const Card = (props: any) => {
  let [state, setState] = useState(0);
  return (
    <div className={style.card}>
      <img className={style.img} src={avatar} alt="Avatar" />
      <h4>
        <b>{props.name}</b>
      </h4>
      <div className={style.container}>
        <div>
          <p>{props.context}</p>
        </div>

        <div className={style.rub}>
          <span>от {props.price} ₽</span>

          {/* <button className={style.button}></button> */}
        </div>
        <ControlledSwitches />

        {/* <MiddleDividers /> */}
      </div>
    </div>
  );
};

export default Card;
