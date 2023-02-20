import React from "react";
import homeImage from "../../../images/homeImage.jpg";
import style from "./Home.module.scss";
import ex from "../../../images/ex.svg";
import Circle from "./Circle";
import Button from "../../elements/button";

import "./style.scss";

const Home = () => {
  return (
    <>
      <div>
        <img className={style.homeImage} src={homeImage}></img>
        <h1 className={style.h1Up}>Аренда</h1>
        <h1 className={style.h1Down}>Спецтехники</h1>
        <h2 className={style.h2Up}> </h2>
        <h2 className={style.h2Down}>с вами с 1970 года</h2>
        <Button txt="Button" />
      </div>
      <div>
        <svg
          width="112"
          height="89"
          viewBox="0 0 112 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.1 87.6001C52.3526 87.6001 55.8 84.2422 55.8 80.1001C55.8 75.958 52.3526 72.6001 48.1 72.6001C43.8474 72.6001 40.4 75.958 40.4 80.1001C40.4 84.2422 43.8474 87.6001 48.1 87.6001Z"
            stroke="#EA8300"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-1"
          ></path>
          <path
            d="M48.1 82.2999C49.315 82.2999 50.3 81.3149 50.3 80.0999C50.3 78.8849 49.315 77.8999 48.1 77.8999C46.885 77.8999 45.9 78.8849 45.9 80.0999C45.9 81.3149 46.885 82.2999 48.1 82.2999Z"
            stroke="#EA8300"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-2"
          ></path>
          <path
            d="M103.2 87.6001C107.453 87.6001 110.9 84.2422 110.9 80.1001C110.9 75.958 107.453 72.6001 103.2 72.6001C98.9474 72.6001 95.5 75.958 95.5 80.1001C95.5 84.2422 98.9474 87.6001 103.2 87.6001Z"
            stroke="#EA8300"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-3"
          ></path>
          <path
            d="M103.2 82.2999C104.415 82.2999 105.4 81.3149 105.4 80.0999C105.4 78.8849 104.415 77.8999 103.2 77.8999C101.985 77.8999 101 78.8849 101 80.0999C101 81.3149 101.985 82.2999 103.2 82.2999Z"
            stroke="#EA8300"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-4"
          ></path>
          <path
            d="M69.1 46.8C79.8 46.8 90.4 46.8 101.1 46.8C103.6 46.8 105.7 48.9 105.7 51.4V62C105.7 64.1 104 65.8 101.9 65.8L93.9 65.9"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-5"
          ></path>
          <path
            d="M60.7 65.9H54C51.9 65.9 50.2 64.2 50.2 62.1C50.2 58.4 50.3 54.9 51.7 51.7C52.8 49.3 53 49.6 53.8 47.6C55.7 42.5 54.1 38.4 56.7 38.3C59.8 38.2 62.8 38.2 68.5 38.2C69.4 38.2 68.9 41.7 69 45.8C69.1 50.8 69.2 51.2 68.6 52.8C67.3 56.4 63.9 58.9 62.6 58.9C56 59 51.6 58.9 50.3 58.9"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-6"
          ></path>
          <path
            d="M55.8 80.1001H95.5"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-7"
          ></path>
          <path
            d="M48.1 88H103"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-8"
          ></path>
          <path
            d="M94.9 72.3V65.8"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-9"
          ></path>
          <path
            d="M59.6 71.8V65.8"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-10"
          ></path>
          <path
            d="M25.1 76.8H10C10 76.8 4.8 75 2.7 72.3C0.599996 69.6 2.7 65.9 2.7 65.9L5.6 60.8C5.6 60.8 21.6 3.60002 21.7 3.40002C22.2 2.20002 22.8 1.40002 24.1 1.20002C25.3 0.900017 26.2 1.30002 26.8 1.80002C27.7 2.60002 28.2 3.60002 28.2 4.80002V10.6L59.2 23.8C61.1 24.6 62.4 26.2 62.9 28.2L65.2 38.2"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-11"
          ></path>
          <path
            d="M30.6 19.3C30.6 19.3 46.5 27.3 50.8 29C55.1 30.7 55.9 38.2 55.9 38.2"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-12"
          ></path>
          <path
            d="M5.59998 60.7L13.1 60.8001L27.5 17.8"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-13"
          ></path>
          <path
            d="M13.5 59.5L20.9 76.7"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-14"
          ></path>
          <path
            d="M27.9 10.5001C20.9 8.50006 22.2 14.5001 23.1 15.4001C23.4 15.7001 24.8 16.6001 25.1 16.7001L30.6 19.3001"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-15"
          ></path>
          <path
            d="M48.1 72.6001H102.9"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            className="svg-elem-16"
          ></path>
          <path
            d="M81.4203 60.4943L81.301 63.5625H80.2101V61.5H79.5965V60.4943H81.4203ZM74.0055 61.5V52.7727H75.0112V60.5284H79.5112V52.7727H80.5169V61.5H74.0055ZM83.0173 52.7727H84.2786L87.2445 60.017H87.3468L90.3127 52.7727H91.5741V61.5H90.5854V54.8693H90.5002L87.7729 61.5H86.8184L84.0911 54.8693H84.0059V61.5H83.0173V52.7727ZM93.693 52.7727H94.9544L97.9203 60.017H98.0226L100.989 52.7727H102.25V61.5H101.261V54.8693H101.176L98.4487 61.5H97.4942L94.7669 54.8693H94.6817V61.5H93.693V52.7727Z"
            fill="black"
            className="svg-elem-17"
          ></path>
          <path
            d="M41 80V80.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-18"
          ></path>
          <path
            d="M48 73V73.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-19"
          ></path>
          <path
            d="M48 87V87.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-20"
          ></path>
          <path
            d="M55 80V80.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-21"
          ></path>
          <path
            d="M53 75V75.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-22"
          ></path>
          <path
            d="M43 75V75.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-23"
          ></path>
          <path
            d="M43 85V85.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-24"
          ></path>
          <path
            d="M53 85V85.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-25"
          ></path>
          <path
            d="M96 80V80.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-26"
          ></path>
          <path
            d="M103 73V73.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-27"
          ></path>
          <path
            d="M103 87V87.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-28"
          ></path>
          <path
            d="M110 80V80.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-29"
          ></path>
          <path
            d="M108 75V75.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-30"
          ></path>
          <path
            d="M98 75V75.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-31"
          ></path>
          <path
            d="M98 85V85.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-32"
          ></path>
          <path
            d="M108 85V85.0854"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            className="svg-elem-33"
          ></path>
        </svg>
      </div>
      <div className={style.circle}></div>
      <Circle />
    </>
  );
};

export default Home;
