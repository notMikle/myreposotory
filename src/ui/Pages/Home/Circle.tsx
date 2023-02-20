import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Circle.module.scss";

const Circle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.circle}>
        <svg width="1145" height="745" viewBox="0 0 767 767">
          <g>
            <mask id="path-1-inside-1_40_7" fill="white">
              <path d="M650.922 306.274C664.078 359.401 661.113 415.243 642.403 466.678L637.519 464.901C655.876 414.437 658.785 359.648 645.877 307.523L650.922 306.274Z" />
            </mask>
            <path
              d="M650.922 306.274C664.078 359.401 661.113 415.243 642.403 466.678L637.519 464.901C655.876 414.437 658.785 359.648 645.877 307.523L650.922 306.274Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-1-inside-1_40_7)"
            />
            <mask id="path-2-inside-2_40_7" fill="white">
              <path d="M116.078 306.274C102.922 359.401 105.887 415.243 124.597 466.678L129.481 464.901C111.124 414.437 108.215 359.648 121.123 307.523L116.078 306.274Z" />
            </mask>
            <path
              d="M116.078 306.274C102.922 359.401 105.887 415.243 124.597 466.678L129.481 464.901C111.124 414.437 108.215 359.648 121.123 307.523L116.078 306.274Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-2-inside-2_40_7)"
            />
            <mask id="path-3-inside-3_40_7" fill="white">
              <path d="M589.614 200.696C553.297 159.748 505.607 130.546 452.625 116.813L451.321 121.844C503.303 135.318 550.094 163.969 585.725 204.144L589.614 200.696Z" />
            </mask>
            <path
              d="M589.614 200.696C553.297 159.748 505.607 130.546 452.625 116.813L451.321 121.844C503.303 135.318 550.094 163.969 585.725 204.144L589.614 200.696Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-3-inside-3_40_7)"
            />
            <mask id="path-4-inside-4_40_7" fill="white">
              <path d="M177.386 200.696C213.703 159.748 261.393 130.546 314.375 116.813L315.679 121.844C263.697 135.318 216.906 163.969 181.275 204.144L177.386 200.696Z" />
            </mask>
            <path
              d="M177.386 200.696C213.703 159.748 261.393 130.546 314.375 116.813L315.679 121.844C263.697 135.318 216.906 163.969 181.275 204.144L177.386 200.696Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-4-inside-4_40_7)"
            />
            <mask id="path-5-inside-5_40_7" fill="white">
              <path d="M589.614 566.304C553.297 607.252 505.607 636.454 452.625 650.187L451.321 645.156C503.303 631.682 550.094 603.031 585.725 562.856L589.614 566.304Z" />
            </mask>
            <path
              d="M589.614 566.304C553.297 607.252 505.607 636.454 452.625 650.187L451.321 645.156C503.303 631.682 550.094 603.031 585.725 562.856L589.614 566.304Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-5-inside-5_40_7)"
            />
            <mask id="path-6-inside-6_40_7" fill="white">
              <path d="M177.386 566.304C213.703 607.252 261.393 636.454 314.375 650.187L315.679 645.156C263.697 631.682 216.906 603.031 181.275 562.856L177.386 566.304Z" />
            </mask>
            <path
              d="M177.386 566.304C213.703 607.252 261.393 636.454 314.375 650.187L315.679 645.156C263.697 631.682 216.906 603.031 181.275 562.856L177.386 566.304Z"
              stroke="white"
              stroke-width="10"
              mask="url(#path-6-inside-6_40_7)"
            />
          </g>
          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="382.5" cy="116.5" r="33.5" stroke-width="2" />
            <circle cx="382.5" cy="115.5" r="15.5" stroke-width="2" />
            <text x="295" y="30">
              <tspan dx={-70} dy={0}>
                Снос и демонтаж,
              </tspan>
              <tspan dx={-260} dy={30}>
                планирование территории
              </tspan>
            </text>
          </a>
          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="382.5" cy="654.5" r="33.5" stroke-width="2" />
            <circle cx="382.5" cy="654.5" r="15.5" stroke-width="2" />
            <text x="295" y="720">
              <tspan>Автомобильные</tspan>
              <tspan dx={-160} dy={30}>
                перевозки
              </tspan>
            </text>
          </a>
          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="151.5" cy="521.5" r="33.5" stroke-width="2" />
            <circle cx="151.5" cy="521.5" r="15.5" stroke-width="2" />
            <text x="-120" y="570">
              <tspan>Прокладка газо- </tspan>
              <tspan dx={-230} dy={30}>
                нефте- водопроводов
              </tspan>
            </text>
          </a>
          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="621.5" cy="521.5" r="33.5" stroke-width="2" />
            <circle cx="621.5" cy="521.5" r="15.5" stroke-width="2" />
            <text x="660" y="570">
              <tspan>Выполнение погрузочных </tspan>
              <tspan dx={-285} dy={30}>
                и разгрузочных работ
              </tspan>
            </text>
          </a>

          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="151.5" cy="255.5" r="33.5" stroke-width="2" />
            <circle cx="151.5" cy="255.5" r="15.5" stroke-width="2" />

            <text x="-120" y="225">
              <tspan>Разработка любых</tspan>
              <tspan dx={-150} dy={30}>
                грунтов
              </tspan>
            </text>
          </a>

          <a
            className={style.dot}
            onClick={() => navigate(`../technique`, { replace: false })}
          >
            <circle cx="621.5" cy="255.5" r="33.5" stroke-width="2" />
            <circle cx="621.5" cy="255.5" r="15.5" stroke-width="2" />
            <text x="661" y="225">
              <tspan>Транспортировка</tspan>
              <tspan dx={-180} dy={30}>
                любых грузов
              </tspan>
            </text>
          </a>
          <defs>
            <filter id="filter0_d_40_7">
              <feBlend mode="normal" in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Circle;
