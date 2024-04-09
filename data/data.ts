import {IconType} from 'react-icons';
import {
    SiTelegram,
    SiGithub,
    SiLinkedin,
} from 'react-icons/si';


export type TechType = {
    id: string,
    images: Array<string>,
    brand: string,
    title: string,
    info: string,
    category: string,
    finalPrice: number,
    originalPrice: number,
    quantity: number,
    gosNum: string,
}


export const tech: TechType[] = [
    {
        id: '1',
        images: [
            '/amkodor.jpg',
        ],
        brand: 'Амкодор 342В',
        title: 'Погрузчик Амкодор 342В',
        info: '',
        category: 'Погрузчик',
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        gosNum: '1577EK'
    },
    {
        id: '2',
        images: [
            '/bulldozer.png',
        ],
        brand: 'Бульдозер Т-170',
        title: 'Бульдозер Т-170',
        info: 'это бульдозер тут будет описание',
        category: 'bulldozers',
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        gosNum: '1577EK'
    },
    {
        id: '3',
        images: [
            '/5511.jpeg',
        ],
        brand: 'Камаз',
        title: 'Камаз-5511',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'К444УК'
    },
    {
        id: '4',
        images: [
            '/5410.jpeg',
        ],
        brand: 'Камаз',
        title: 'Камаз-5410',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'К408МХ'
    },
    {
        id: '5',
        images: [
            '/excavator.png',
        ],
        brand: 'Маз',
        title: 'Маз-544008-060-031',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'Н383ТУ'
    },
    {
        id: '6',
        images: [
            '/excavator.png',
        ],
        brand: 'Freightliner',
        title: 'Freightliner',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'Е336РА'
    },
    {
        id: '7',
        images: [
            '/fh13.jpeg',
        ],
        brand: 'Volvo',
        title: 'Volvo FH D13',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'T914KC'
    },
    {
        id: '8',
        images: [
            '/excavator.png',
        ],
        brand: 'Volvo',
        title: 'Volvo FH-Truck 4x2',
        info: '',
        category: 'truck',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'T411PX'
    },
    {
        id: '9',
        images: [
            '/excavator.png',
        ],
        brand: 'Hitachi',
        title: 'Hitachi zx240LC-5G',
        info: '',
        category: 'excavator',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: ''
    },
    {
        id: '10',
        images: [
            '/excavator.png',
        ],
        brand: 'Doosan',
        title: 'Doosan DX260LCA',
        info: '',
        category: 'excavator',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: ''
    },
    {
        id: '11',
        images: [
            '/excavator.png',
        ],
        brand: 'Зил',
        title: 'Автовышка АГП-2202',
        info: '',
        category: 'lift',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'E248PC'
    },
    {
        id: '12',
        images: [
            '/excavator.png',
        ],
        brand: 'Зил',
        title: 'Автовышка АГП-2202',
        info: '',
        category: 'lift',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'E249PC'
    },
    {
        id: '13',
        images: [
            '/ks_54711.jpg',
        ],
        brand: 'Камаз',
        title: 'Автокран КС-54711',
        info: 'Автомобильный кран Ивановец КС-54711, грузоподъемностью 25 т, смонтирован на шасси КАМАЗ предназначен для выполнения погрузочно-разгрузочных и строительно-монтажных работ на рассредоточенных объектах. Привод механизмов автокрана — гидравлический от насоса, приводимого в действие двигателем шасси. Гидропривод обеспечивает легкость и простоту управления краном, плавность работы механизмов, широкий диапазон рабочих скоростей, совмещение крановых операций. Стрела автомобильного крана КС 35714К — телескопическая трехсекционная. Выдвижение секций — гидроцилиндром и полиспастами.',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 2,
        gosNum: 'K781TT'
    },
    // {
    //     id: '14',
    //     images: [
    //         '/ks_54711.jpg',
    //     ],
    //     brand: 'Камаз',
    //     title: 'Автокран КС-54711',
    //     info: '',
    //     category: 'crane',
    //     finalPrice: 649,
    //     originalPrice: 1190,
    //     quantity: 2,
    //     gosNum: 'K782TT'
    // },
    {
        id: '15',
        images: [
            '/excavator.png',
        ],
        brand: 'Камаз',
        title: 'Автокран КС-55713-1K',
        info: '',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'T218KO'
    },
    {
        id: '16',
        images: [
            '/excavator.png',
        ],
        brand: 'МКАТ',
        title: 'МКАТ-40 Тадано',
        info: '',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'M999KE'
    },
    {
        id: '17',
        images: [
            '/excavator.png',
        ],
        brand: 'МКАТ',
        title: 'МКАТ-40 Тадано',
        info: '',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'O337KH'
    },
    {
        id: '18',
        images: [
            '/excavator.png',
        ],
        brand: 'МКАТ',
        title: 'МКАТ-40 Тадано',
        info: '',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'X404CP'
    },
    {
        id: '19',
        images: [
            '/excavator.png',
        ],
        brand: 'ГМТ-220',
        title: 'ГМТ-220 КРУПП',
        info: '',
        category: 'crane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        gosNum: 'H278EA'
    },
    {
        id: '20',
        images: [
            '/excavator.png',
        ],
        brand: 'МКГ-25БР',
        title: 'МКГ-25БР',
        info: '',
        category: 'gusCrane',
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 7,
        gosNum: ''
    },
];

export type SocialType = {
    network: string
    href: string
    color: string
    icon: IconType
}
export const social = [
    {
        network: 'TG',
        href: 'https:/t.me/notMikle',
        icon: SiTelegram,
        color: 'red'
    },
    {
        network: 'LI',
        href: 't.me',
        icon: SiLinkedin,
        color: 'red'
    },
    {
        network: 'Git',
        href: 'https:/github.com/notMikle',
        icon: SiGithub,
        color: 'red'
    }
]