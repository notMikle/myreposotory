import React from "react";
import style from "./button.module.scss";

const Button = (props: any) => {
  return (
    <div>
      <a href="#" className={style.btn}>
        {props.txt}
        <span></span>
      </a>
    </div>
  );
};

export default Button;
