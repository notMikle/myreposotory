import React, { useState } from "react";
import style from "./Card.module.scss";
import avatar from "../../../images/avatar.png";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {
  const navigate = useNavigate();
  debugger;

  return (
    <div className={style.card}>
      <img className={style.img} src={avatar} alt="Avatar" />
      <h4>
        <b>{props.name}</b>
      </h4>
      <div className={style.container}>
        <div>
          <p>{props.context}</p>
          <span>кол-во {props.quantity} шт</span>
        </div>

        <div className={style.rub}>
          <span>от {props.price} ₽</span>
          <button
            className={style.button}
            onClick={() =>
              navigate(`../technique/${props.id}`, { replace: false })
            }
          >
            <span>Выбрать</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
