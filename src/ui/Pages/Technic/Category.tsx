import React from "react";
import style from "./Category.module.scss";
import eks from "../../../images/eks-gus.svg";
const Category = (props: any) => {
  let a = props.newItem === 1 ? style.active : style.li;

  return (
    <div className={style.categories}>
      <ul className={style.Ul}>
        <span>КАТЕГОРИИ</span>
        <hr className={style.hr}></hr>
        <li style={{ display: "flex" }}>
          <a
            className={props.newItem === 0 ? style.active : style.li}
            onClick={() => props.onClickCategory(0)}
          >
            Все
          </a>
          <span className={style.badge}>100</span>
        </li>
        <li>
          <a
            className={props.newItem === 1 ? style.active : style.li}
            href="#"
            onClick={() => props.onClickCategory(1)}
          >
            Экскаваторы
          </a>
        </li>
        <li>
          <a
            className={props.newItem === 2 ? style.active : style.li}
            href="#"
            onClick={() => props.onClickCategory(2)}
          >
            Бульдозеры
          </a>
        </li>
        <li>
          <a
            className={props.newItem === 3 ? style.active : style.li}
            href="#"
            onClick={() => props.onClickCategory(3)}
          >
            Трубоукладчики
          </a>
        </li>
        <li>
          <a
            className={props.newItem === 4 ? style.active : style.li}
            href="#"
            onClick={() => props.onClickCategory(4)}
          >
            Краны
          </a>
        </li>
        <li>
          <a
            className={props.newItem === 5 ? style.active : style.li}
            href="#"
            onClick={() => props.onClickCategory(5)}
          >
            Автокраны
          </a>
        </li>
        <li>
          <a
            href="#"
            className={props.newItem === 6 ? style.active : style.li}
            onClick={() => props.onClickCategory(6)}
          >
            Автотранспорт
          </a>
        </li>
        <li>
          <a
            href="#"
            className={props.newItem === 7 ? style.active : style.li}
            onClick={() => props.onClickCategory(7)}
          >
            Гидроподъемники
          </a>
        </li>
        <li>
          <a
            href="#"
            className={props.newItem === 8 ? style.active : style.li}
            onClick={() => props.onClickCategory(8)}
          >
            Погрузчики
          </a>
        </li>
        <li>
          <a
            href="#"
            className={props.newItem === 9 ? style.active : style.li}
            onClick={() => props.onClickCategory(9)}
          >
            Другое
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
