import {FlexWrapper} from '@/components/FlexWrapper';
import React, {useContext} from 'react';
import {SectionTitle} from '@/components/SectionTitle';
import {Context} from '@/context/Context';
import {Container} from '@/components/Container';
import {SectionSubTitle} from '@/components/SectionSubTitle';
import {StyledSkills} from '@/layouts/sections/skils/SkillsStyled';
import Buldozer from '@/assets/image/buldozer.svg'
import Avtokran from '@/assets/image/avtokran.svg'
import Avtovyshka from '@/assets/image/avtovyshka.svg'
import Dlinnomer from '@/assets/image/dlinnomer.svg'
import Eksgus from '@/assets/image/eks-gus.svg'
import FrontPogruz from '@/assets/image/front-pogruz.svg'
import { FaArrowRight } from "react-icons/fa";
import { PiGarageLight } from "react-icons/pi";
import Samosval from '@/assets/image/samosval.svg'
import Tral from '@/assets/image/tral.svg'
import styled from 'styled-components';
import {theme} from '@/styles/theme';
import router from 'next/router';
import {
    handleAllClick,
    handleBulldozerClick,
    handleCraneClick,
    handleExcavatorClick, handleGusCraneClick, handleLiftClick,
    handleTruckClick
} from '@/assets/function';


export const OurTechnics = () => {

    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle>Наш парк техники</SectionTitle>
                <SectionSubTitle>Technologies I’ve been working with recently</SectionSubTitle>
                <FlexWrapper wrap={'wrap'} gap={'20px'}>
                    <Tech onClick={handleBulldozerClick}>
                        <TechSVG><Buldozer/></TechSVG>
                        <h3>Бульдозеры</h3>
                    </Tech>
                    <Tech>
                        <TechSVG><Dlinnomer/></TechSVG>
                        <h3>Длинномеры</h3>
                    </Tech>
                    <Tech>
                        <TechSVG onClick={handleExcavatorClick}><Eksgus/></TechSVG>
                        <h3>Экскаваторы</h3>
                    </Tech>
                    <Tech>
                        <TechSVG><FrontPogruz/></TechSVG>
                        <h3>Погрузчики</h3>
                    </Tech>
                    <Tech>
                        <TechSVG onClick={handleGusCraneClick}><Avtokran/></TechSVG>
                        <h3>Гусеничные краны</h3>
                    </Tech>
                    <Tech>
                        <TechSVG onClick={handleCraneClick}><Avtokran/></TechSVG>
                        <h3>Автокраны</h3>
                    </Tech>
                    <Tech>
                        <TechSVG onClick={handleLiftClick}><Avtovyshka/></TechSVG>
                        <h3>Автовышки</h3>
                    </Tech>
                    <Tech onClick={handleTruckClick}>
                        <TechSVG><Samosval/></TechSVG>
                        <h3>Самосвалы</h3>
                    </Tech>
                    <Tech>
                        <TechSVG><Tral/></TechSVG>
                        <h3>Тралы</h3>
                    </Tech>
                    <Tech onClick={handleAllClick}>
                        <ArrowAll><FaArrowRight size={40}/></ArrowAll>
                        <h3>Смотреть весь парк</h3>
                    </Tech>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //flex-grow: 1;
  width: 250px;
  cursor: pointer;

  h3 {
    font-size: 20px;
    font-weight: normal;
  }

  &:hover {
    transform: scale(1.1);
    color: rgb(255, 170, 0);
  }

    // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const TechSVG = styled.svg`
  fill: none;
  stroke: ${theme.colors.primaryText};
  stroke-width: 2;
  stroke-miterlimit: 10;
  &:hover {
    stroke: rgb(255, 170, 0);
  }
`
export const ArrowAll = styled.div`
  height: 155px;
  display: flex;
  align-items: center;
`