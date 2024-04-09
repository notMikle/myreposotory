import React from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import styled from 'styled-components';

const MyMapWithRoute = () => (
    <YMaps>
        <Maps>
            <Map defaultState={{ center: [51.2706, 37.76703], zoom: 13 }} style={{ width: '100%', height: '400px' }} >
                <Placemark geometry={[51.2706, 37.76703]} properties={{ iconCaption: 'СУМ ЦММ' }}>
                </Placemark>
            </Map>
        </Maps>
    </YMaps>
);

export default MyMapWithRoute;
const Maps = styled.div`
  width: 50%;
  min-width: 400px;
`