import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/Pages/Home/Home";

import "./App.css";
import Header from "./ui/Header/Header";
import Contacts from "./ui/Pages/Contacts/Contacts";
import OurTechnique from "./ui/Pages/Technic/OurTechnique";
import ItemOfTechnic from "./ui/Pages/Technic/ItemOfTechnic";
import About from "./ui/Pages/About/About";
import Zayavka from "./ui/Pages/Zayavka/Zayavka";
import Works from "./ui/Pages/Works/works";

function App() {
  interface technik {
    id: number;
    categoryId: number;
    name: string;
    subname: string;
    context: string;
    characteristic: string;
    slug: string;
    price: number;
    quantity?: number;
  }
  const state: technik[] = [
    {
      id: 1,
      categoryId: 1,
      name: "Автовышка",
      subname: "АГП-2202",
      context: "Автовышка на базе Зил-433362",
      characteristic: `Максимальная грузоподъемность люльки, кг	300
      Высота подъема люльки, м	22
      Максимальный вылет стрелы, м	10,5`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },
    {
      id: 2,
      categoryId: 1,
      name: "Автокран",
      subname: "КС 45719",
      context:
        "Кран автомобильный КС-45719 грузоподъемностью 20 тонн на шасси автомобиля КамАЗ-53215",
      characteristic: `Грузоподьемность максимальная, т/вылет, м	20/3,2
      Длина стрелы, м	9,7 - 21,7
      Максимальная высота подьема крюка, м	21,9`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },
    {
      id: 3,
      categoryId: 1,
      name: "Автокран",
      subname: "КС 54711",
      context: "Кран автомобильный КС-54711 грузоподъемностью до 25 тонн",
      characteristic: `грузоподъемность – 25 т;
      вылет стрелы – от 2 до 19,7 м, длина – от 9 до 21;граничная высота подъема – 21,3 м.`,
      slug: "auto",
      quantity: 1,
      price: 2000,
    },
    {
      id: 4,
      categoryId: 1,
      name: "Автокран",
      subname: "КС 55713-1К",
      context:
        "Кран автомобильный КС-55713-1К-1 грузоподъемностью 25 тонн на шасси автомобиля КАМАЗ-65115 ",
      characteristic: `Грузоподъёмность максимальная, т/вылет, м	25/3,2
      Длина гуська, м	7,5
      Длина стрелы, м	9-21
      Количество секций, шт.	2 выдвижные (общее кол-во 3)
      Максимальная высота подъёма крюка, м
      с основной стрелой	21,6
      с основной стрелой и гуськом 7,5 м.	29,3`,
      slug: "auto",
      quantity: 1,
      price: 2000,
    },
    {
      id: 5,
      categoryId: 1,
      name: "Автокран",
      subname: "Мкат 40 ТАДАНО",
      context: "Кран МКАТ-40 гидравлический грузоподъемностью 40 т",
      characteristic: `Грузоподъемность, т	40 т
      Длина стрелы (max)	35 м
      Вылет стрелы (max)	24 м
      Высота подъёма крюка	`,
      slug: "auto",
      quantity: 3,
      price: 2000,
    },
    {
      id: 6,
      categoryId: 1,
      name: "Автокран",
      subname: "ГМТ-220 КРУПП",
      context: "Автокран ГМТ-220 КРУПП",
      characteristic: `Автокран на спец.шасси ГМТ-220 КРУПП обладает максимальной грузоподъемностью до 220тн., и вылетом стрелы 52,5м.+гусек 45м.`,
      slug: "auto",
      quantity: 1,
      price: 2000,
    },
    {
      id: 7,
      categoryId: 2,
      name: "Кран гусеничный",
      subname: "МКГ-25БР 1866/9168",
      context:
        "МКГ-25БР — полноповоротный самоходный кран на раздвижном гусеничном ходу грузоподъемностью 25т",
      characteristic: `Автокран на спец.шасси ГМТ-220 КРУПП обладает максимальной грузоподъемностью до 220тн., и вылетом стрелы 52,5м.+гусек 45м.`,
      slug: "auto",
      quantity: 7,
      price: 2000,
    },
    {
      id: 8,
      categoryId: 2,
      name: "Кран гусеничный",
      subname: "СКГ 40/63",
      context:
        "СКГ-40/63 — дизель-электрический полноповоротный стреловой самоходный кран на гусеничном ходу",
      characteristic: `Кран СКГ-40/63 имеет дизель-электрический привод, может работать от внешней сети переменного тока напряжением 380 В.`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },
    {
      id: 9,
      categoryId: 2,
      name: "Кран гусеничный",
      subname: "СКГ 401",
      context:
        "Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 40т",
      characteristic: `Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 40т`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },
    {
      id: 10,
      categoryId: 2,
      name: "Кран гусеничный",
      subname: "СКГ 63/100",
      context:
        "Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 63т",
      characteristic: `Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 63т`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },
    {
      id: 11,
      categoryId: 2,
      name: "Кран гусеничный",
      subname: "СКГ 631",
      context:
        "Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 63т",
      characteristic: `Монтажный стреловой электрический полноповоротный самоходный кран на гусеничном ходу с макс. грузоподъемностью 63т`,
      slug: "auto",
      quantity: 2,
      price: 2000,
    },

    {
      id: 12,
      categoryId: 3,
      name: "Трубоукладчик",
      subname: "ТГ-123",
      context:
        "Макс. грузоподъемность: 12,5 т. Труба диаметром: до 720 мм., на базе трактора Т-170.",
      characteristic: `Эксплуатационная масса	11900 кг
        Эксплуатационная мощность двигателя	58 кВт
        Максимальный объем ковша	0,45 м3
        Максимальная глубина копания	4900 мм
        Сила отрыва	66 кН
        Транспортная скорость	20 км/ч
        Мощность захвата	0,08 - 0,25 м3`,
      slug: "truboukladchik",
      quantity: 1,
      price: 100,
    },
    {
      id: 13,
      categoryId: 3,
      name: "Трубоукладчик",
      subname: "ОМТ-16",
      context:
        "Макс. грузоподъемность: 16 т., max вылет стрелы 6м., высота подъема 5м., труба диаметром: до 720 мм. масса 25тн.",
      characteristic: `Эксплуатационная масса	11900 кг
        Эксплуатационная мощность двигателя	58 кВт
        Максимальный объем ковша	0,45 м3
        Максимальная глубина копания	4900 мм
        Сила отрыва	66 кН
        Транспортная скорость	20 км/ч
        Мощность захвата	0,08 - 0,25 м3`,
      slug: "truboukladchik",
      quantity: 3,
      price: 100,
    },
    {
      id: 14,
      categoryId: 4,
      name: "Экскаватор",
      subname: "Hitachi ZX240LC-5G",
      context: "",
      characteristic: `Номинальная мощность (ISO), кВт / л.с.132 / 177 при 2150 об/минЭксплуатационная масса, кг23400 - 24000Емкость ковша «с шапкой» (ISO), m³0,92 - 1,40Длина рукояти, м2,96`,
      slug: "excavator",
      quantity: 1,
      price: 100,
    },
    {
      id: 15,
      categoryId: 4,
      name: "Экскаватор",
      subname: "Doosan DX260LCA",
      context: "",
      characteristic: `Эксплуатационная масса	24,8 т
      Вместимость ковша	1,1 м3
      Ном. мощность двигателя 	136 кВт
      Усилие копания на ковше (при ном./повышенном давлении)	17,3/18,4 т
      Усилие копания на рукояти (при ном./повышенном давлении)	13,8/14,6 т
      Макс. радиус копания	10180 мм`,
      slug: "excavator",
      quantity: 1,
      price: 100,
    },
    {
      id: 16,
      categoryId: 4,
      name: "Погрузчик",
      subname: "Амкодор 342В",
      context:
        "Грузоподъемность кг	4000 Объем ковша	2,5 м^3 Радиус поворота	5950 мм",
      characteristic: `Эксплуатационная масса	11900 кг
        Эксплуатационная мощность двигателя	58 кВт
        Максимальный объем ковша	0,45 м3
        Максимальная глубина копания	4900 мм
        Сила отрыва	66 кН
        Транспортная скорость	20 км/ч
        Мощность захвата	0,08 - 0,25 м3`,
      slug: "loader",
      price: 100,
    },
    {
      id: 17,
      categoryId: 4,
      name: "Бульдозер",
      subname: "Т-170",
      context: "Мощность двигателя: 170 л.с",
      characteristic: `Эксплуатационная масса	11900 кг
      Эксплуатационная мощность двигателя	58 кВт
      Максимальный объем ковша	0,45 м3
      Максимальная глубина копания	4900 мм
      Сила отрыва	66 кН
      Транспортная скорость	20 км/ч
      Мощность захвата	0,08 - 0,25 м3`,
      slug: "bulldozer",
      price: 100,
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/technique"
            element={<OurTechnique state={[...state]} />}
          />
          <Route
            path="/technique/:id"
            element={<ItemOfTechnic state={state} />}
          />
          <Route path="/ourWorks" element={<Works />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/zayavka" element={<Zayavka state={[...state]} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
