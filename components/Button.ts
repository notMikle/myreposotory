import styled from 'styled-components';
import {theme} from '@/styles/theme';

type ButtonProps = {
    width?:string
}

export const Button = styled.button<ButtonProps>`
  width: ${props=>props.width||'100%'};
  display: flex;
  padding: 5px;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  height: 40px;
  color: ${theme.colors.primaryText};
  //text-transform: uppercase;
  border: 1px solid #000;
  &:hover {
    transform: scale(1.05);
    color: rgb(255, 170, 0);
  }
`