import React, { useState } from "react";
import style from "./cardZayavka.module.scss";
import avatar from "../../../images/avatar.png";

import ControlledSwitches from "./switch";

const Card = (props: any) => {
  let [state, setState] = useState(true);
  let a = () => {
    setState((state = !state));
  };
  let gusek = props.gusek;

  return (
    <div className={state === true ? style.card : style.card2} onClick={a}>
      <img className={style.img} src={avatar} alt="Avatar" />
      <h4>
        <b>
          {props.name}
          <br></br>
          {props.subname}
        </b>
      </h4>
      <div className={style.container}>
        <div>
          <p>{props.context}</p>
        </div>

        <div className={style.rub}>
          <span>от {props.price} ₽</span>

          {/* <button className={style.button}></button> */}
        </div>
        <div className={style.dop}>
          {gusek ? (
            <>
              Гусек: <ControlledSwitches />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
