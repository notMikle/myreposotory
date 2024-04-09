import {theme} from '@/styles/theme';

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Nunito Sans'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryText};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 480px)/(1280 - 480) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`