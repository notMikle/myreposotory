import { YMaps, Map, Placemark } from "react-yandex-maps";
import style from "./Maps.module.scss";
const Maps = () => (
  <YMaps>
    <Map
      defaultState={{
        center: [51.270545, 37.767056],
        zoom: 14,
        controls: ["zoomControl", "fullscreenControl"],
      }}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
      className={style.map}
    >
      <Placemark
        defaultGeometry={[51.270545, 37.767056]}
        properties={{
          balloonContentBody: [
            "<address>",
            "<strong>Офис Яндекса в Москве</strong>",
            "<br/>",
            "Адрес: 119021, Москва, ул. Льва Толстого, 16",
            "<br/>",
            'Подробнее: <a href="https://company.yandex.ru/">https://company.yandex.ru</a>',
            "</address>",
          ].join(""),
        }}
      />
    </Map>
  </YMaps>
);
export default Maps;
