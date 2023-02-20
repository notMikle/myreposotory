import React from "react";

import style from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.containerLogo}>
        <Link to="/">
          <img className={style.logo} src={logo}></img>
        </Link>
        <Link to="/">
          <h2 className={style.zmm}>СУМ ЦММ</h2>
        </Link>
      </div>
      <div className={style.headerMenu}>
        <li>
          <Link to="/technique">Парк техники</Link>
        </li>
        <li>
          <Link to="/ourWorks">Наши работы</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
        <li>
          <Link to="/zayavka">Оставить заявку</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
