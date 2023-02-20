import React from "react";
import Maps from "./Maps";
import style from "./Contact.module.scss";

const Contacts = () => {
  return (
    <div>
      <div className={style.contactsBlock}>
        <div className={style.contactsBlockItem}>
          ОАО СУМ ЦММ <br></br>
          zmm-439987@yandex.ru
        </div>
        <div className={style.contactsBlockItem}>
          309504 <br></br>Белгородская область, город Старый Оскол, юго-западный
          промрайон, площадка Производственная, проезд – 3, № 42
        </div>
        <div className={style.contactsBlockItem}>
          Телефоны для заказа техники: <br></br>тел.факс: +7(4725) 43-99-87{" "}
          <br></br>Коммерческий отдел: <br></br>+7(4725) 43-99-31 <br></br>
          Диспетчер: +7-915-578-0739
        </div>
      </div>
      <div>
        <Maps />
      </div>
      {/* ИНН 3128001557,<br></br>КПП 312801001<br></br> Р/счет 40702810707070100415{" "}
      <br></br>Кор.счет 30101810100000000633 <br></br>
      БИК 041403633 г.Белгород */}
    </div>
  );
};

export default Contacts;
