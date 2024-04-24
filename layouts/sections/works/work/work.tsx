import React from 'react';
import styled from 'styled-components';
import {Icon} from '@/components/icon/icon';
import {SiGithub} from 'react-icons/si';
import {FaLink} from 'react-icons/fa6';
import {Button} from '@/components/Button';
import {theme} from '@/styles/theme';
import router from 'next/router';
import { BsBuildings } from "react-icons/bs";


type WorkPropsType = {
    id:string
    title: string
    description: string
    src: string
    stack:string
    photo:string
}
export const Work = (props: WorkPropsType) => {
    const workHandler =()=>{
        router.push(`/OurWorks/${props.id}`);
    }
    return (
        <StyledWork>
            <ImageWrapper>
               <ButtonWork onClick={workHandler}>
                   <BsBuildings size={30}></BsBuildings>
                   <span>Смотреть</span>
               </ButtonWork>
                <Image src={props.photo} alt="ghb"/>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>
                <Text>{props.stack}</Text>
                <Link href=""> <Icon icon={FaLink} size={'15px'} color={'#000'}></Icon><span>Demo</span></Link>
                <Link href=""> <Icon icon={SiGithub} size={'15px'} color={'#000'}></Icon><span>Code</span></Link>
            </Description>
        </StyledWork>
    );
};


const ButtonWork = styled(Button)`
  font-weight: bold;
  color: rgb(255, 170, 0);
  
`
const Link = styled.a`
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;

  span {
    padding-left: 10px;
  }
  &:hover {
    transform: translateY(-1px) scale(1.05);
    &::before{
      height: 1px;
    }
  }
  &::before{
    content: "";
    position: absolute;
    background-color: black;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const StyledWork = styled.div`
  flex-grow: 1;
  width: 350px;
  //border-radius: 30px;
  background-color: rgb(255, 255, 255);
  color: black;
  ${Link} {
    color: black;
    & + ${Link} {
      margin-left: 20px;
    }
  }
  // @media ${theme.media.desktop}{
  //   max-width: 540px;
  // }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    opacity: 0;
  }
  &:hover {
    &::before{
      opacity: 1;
    }
    ${Button}{
      opacity: 1;
    }
  }
  @media ${theme.media.tablet}{
    &::before{
      opacity: 1;
    }
    ${Button}{
      opacity: 1;
    }
  }
`
const Image = styled.img`
  
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Text = styled.p`
  margin: 14px 0 10px;
`
const Title = styled.h3`

`
const Description = styled.div`
  padding: 25px 20px;
`

