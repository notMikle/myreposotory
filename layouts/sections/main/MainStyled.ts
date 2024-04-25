import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {font} from '@/styles/common';

export const Photo = styled.img`
  width: 400px;
  position: relative;
  object-fit: cover;
  //border: 10px solid;
  //border-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170)) 1;
  //border-radius: 230px;
  margin-right: 15px;
  opacity: 0.0;
  @media ${theme.media.mobile} {
    width: 310px;
`

export const StyledMain = styled.section`
 
  display: flex;
  min-height: 100vh;
  @media ${theme.media.tablet}{
    min-height: 100%;
  }
`
export const StyleH1 = styled.h1`
  ${font({Fmax:40, Fmin:20, weight:700})}
  //background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  color: #FDAA0C;
  p{
    display: none;
  }
`
export const Name = styled.h2`
  ${font({Fmax:50, Fmin:36, weight:700})}
  letter-spacing: 0.05em;
  margin: 15px 0;
  z-index: 555555;
  max-width: 700px;

  span{
    white-space: nowrap;
  }
  
  @media ${theme.media.mobile}{
    margin: 15px 0;
  }
`
export const SmallText = styled.h2`
  color: ${theme.colors.primaryText};
  font-weight: 500;
  font-size: 16px;
`
export const TextBlock = styled.div`
  text-align: left;
`
export const PhotoWrapper = styled.div`
  position: relative;
  @media ${theme.media.mobile}{
    margin-top: 35px;
  }
`
export const SQRwrapper = styled.div`
  
  @media ${theme.media.tablet} {
  display: none;
  }
 
`
export const SQR = styled.div<{ $deg?: string; }>`
  position: absolute;
  bottom: 0;
  width: 444px;
  height: 444px;
  border: 1px solid;
  transform: rotate(${props => props.$deg}deg);
  //border-image: repeating-linear-gradient(90deg, rgb(255, 255, 255, 0.5), rgb(19, 19, 19, 0.5)) 1;
  border-image: linear-gradient(90deg,rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.00)) 1;
  transition: transform 10s ;
  
   //&:hover {
   //  &:{
   //    
   //  }
   //  animation: spin 5s linear 0s infinite;
   //}
   //
   //@keyframes spin {
   //  from {
   //    transform: rotate(0 deg);
   //  }
   //  to {
   //    transform: rotate(360deg);
   //  }
   //}
`