import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import liebherr from "../../../images/liebherr1.png";
import style from "./ItemOfTechnic.module.scss";
import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ru } from "date-fns/locale";
import format from "date-fns/format";
import eachWeekendOfInterval from "date-fns/eachWeekendOfInterval";

import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const ItemOfTechnic = (props: any) => {
  const navigate = useNavigate();
  const params = useParams();

  let [dateTwoo, setDateTwoo] = useState(null);

  const [showCalendar, setShowCalendar] = useState(false);

  const [showTime, setShowTime] = useState(true);

  const [time, setTime] = useState(0);
  console.log(dateTwoo);
  let e = props.state.find((item: any) => item.id == params.id);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      value: "Russian",
    },
  ]);
  let dateTwo = {
    start: date[0].startDate,
    end: date[0].endDate,
  };

  return (
    <>
      <div className={style.container}>
        <a className={style.back} onClick={() => navigate(-1)}>
          ←Назад
        </a>

        <div>
          <h1 className={style.title}>{e.name}</h1>
          <h2 className={style.subtitle}>{e.subname}</h2>
          <img className={style.img} src={liebherr}></img>
        </div>
        <div className={style.options}>
          <div className={style.buttonsTime}>
            <button
              className={showTime ? style.buttonHoursActive : style.buttonHours}
              onClick={() => {
                setShowCalendar(false);
                setShowTime(!showTime);
              }}
            >
              По часам
              <AiOutlineClockCircle />
            </button>
            <button
              className={
                showCalendar ? style.buttonDaysActive : style.buttonDays
              }
              onClick={() => {
                setShowTime(false);
                setShowCalendar(!showCalendar);
              }}
            >
              По сменам <AiOutlineCalendar />
            </button>
          </div>
          <div className={style.calendar}>
            {showCalendar ? (
              <DateRange
                className={style.calendar}
                editableDateInputs={true}
                onChange={(item: any) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                locale={ru}
                rangeColors={["#ea8300"]}
              />
            ) : (
              <></>
            )}

            {showTime ? (
              <>
                <div className={style.vdate}>
                  <button className={style.buttonCalendar}>
                    {dateTwoo === null
                      ? "Выберите дату"
                      : `Выбрано ${format(dateTwoo, "dd MMMM", {
                          locale: ru,
                        })}`}
                  </button>
                  <Calendar
                    date={dateTwoo}
                    onChange={(item: any) => setDateTwoo(item)}
                    className={style.cdate}
                    locale={ru}
                  ></Calendar>
                </div>

                <div className={style.time}>
                  кол-во часов:
                  <h2 className={style.hoursCount}>
                    {time}
                    {time === 2 || time === 3 || time === 4 ? " часа" : <></>}
                    {time === 0 || time >= 5 ? " часов" : <></>}
                    {time === 1 ? " час" : <></>}
                  </h2>
                  <div className={style.setTime}>
                    <button onClick={() => setTime(time + 1)}>
                      <AiOutlinePlusCircle />
                    </button>
                    <button
                      disabled={time <= 0 ? true : false}
                      onClick={() => setTime(time - 1)}
                    >
                      <AiOutlineMinusCircle />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            {/* <h2 className={style.price}>
              Цена:
              {(1038 *
                24 *
                (Number(date[0].endDate) - Number(date[0].startDate))) /
                86400000}{" "}
              ₽<br></br>
              {`Аренда с ${format(date[0].startDate, "dd.MM")} по ${format(
                date[0].endDate,
                "dd.MM"
              )}`}
            </h2> */}
            {/* 
            <h2 className={style.price}></h2>
            <span>
              {`Дней: ${
                (Number(date[0].endDate) - Number(date[0].startDate)) / 86400000
              }`}
              {" , "}
              {`Выходных дней: ${eachWeekendOfInterval(dateTwo).length}`}
              <br></br>
              {`*Стоимость аренды в выходной день +20%`}
            </span> */}
          </div>
        </div>
        <div className={style.card}>
          <div>
            <h3>Тариф</h3>
            <h2>
              <b>320₽/час с НДС</b>
            </h2>
            <hr></hr>
            <h3>Срок аренды</h3>
            <h2>
              {showTime ? (
                <b>
                  {dateTwoo
                    ? `${format(dateTwoo, "dd MMMM", {
                        locale: ru,
                      })}`
                    : "Выберите дату"}
                  <br></br>
                  {time ? time : "и кол-во часов"}
                  {time === 2 || time === 3 || time === 4 ? " часа" : <></>}
                  {time >= 5 ? " часов" : <></>}
                  {time === 1 ? " час" : <></>}
                </b>
              ) : (
                <b>
                  {" "}
                  {date
                    ? `${format(date[0].startDate, "dd MMMM", {
                        locale: ru,
                      })} 
                       по ${format(date[0].endDate, "dd MMMM", {
                         locale: ru,
                       })}`
                    : "Выберите дату"}
                  <br></br>
                </b>
              )}
            </h2>
            <hr></hr>
            <h3>Итого</h3>
            <h2>
              <b>
                {showTime ? `${320 * time} ₽` : <></>}
                {}
                {showCalendar ? (
                  ` ${
                    (320 *
                      8 *
                      (Number(date[0].endDate) - Number(date[0].startDate))) /
                    86400000
                  } ₽`
                ) : (
                  <></>
                )}
              </b>
            </h2>
            <button className={style.buttonZakaz}>
              <b>Заказать</b>
            </button>
          </div>
        </div>

        <span></span>
      </div>
    </>
  );
};

export default ItemOfTechnic;
