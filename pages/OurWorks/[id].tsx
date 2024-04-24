import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Layout from '@/layouts/layout';
import {FlexWrapper} from '@/components/FlexWrapper';
import styled from 'styled-components';
import {Button} from '@/components/Button';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import {Slider} from '@/components/PriceSlider';
import {EditableSpan} from '@/components/editableSpan/editableSpan';
import RhfWithAction, {ButtonSubmit} from '@/components/form/Form';
import {useTechData} from '@/data/techDataContext';
import {SectionTitle} from '@/components/SectionTitle';
import {font} from '@/styles/common';
import {works} from '@/data/data';


const Tech = () => {

    const router = useRouter()
    const goBack = () => {
        router.back();
    };

    const workID = router.query.id
    let elem = works.find(el => el.id === workID)
    if (elem) {
        return (
            <Layout>
                <StyledDivButtonBack>
                    <Button onClick={goBack}>
                        <FaLongArrowAltLeft></FaLongArrowAltLeft>
                        <span>Назад</span>
                    </Button>
                </StyledDivButtonBack>
                <FlexWrapper justify={'center'} align={'start'} gap={'200px'}>
                    <TechImage>
                        <Image src={elem.image} alt={''} width={620} height={450} layout="responsive"/>
                    </TechImage>
                    <FlexWrapper direction={'column'} align={'start'} justify={'center'}>
                        <TitleTech>
                            {elem.title}
                        </TitleTech>
                        <StyledSpan>
                            Тип: {elem.location}
                        </StyledSpan>
                        <StyledSpan>Период: {elem.period}</StyledSpan>
                        <StyledSpan>Техника: {elem.tech.map(el=>el)}</StyledSpan>
                        <StyledSpan>Описание: тут будет описание</StyledSpan>
                        {/*<StyledSpan>*/}
                        {/*    <Slider onValueChange={handleValueChange} value={rangeValue} max={30}></Slider>*/}
                        {/*</StyledSpan>*/}
                        {/*<StyledSpan>*/}
                        {/*    /!*Итого:{rangeValue[1] * Number(elem.finalPrice)}*!/*/}
                        {/*</StyledSpan>*/}
                    </FlexWrapper>
                </FlexWrapper>
                {/*<span>{elem.info}</span>*/}
            </Layout>
        );
    }
};

export default Tech;

export const StyledButtonSubmit = styled(ButtonSubmit)`
  color: #666666;
  border: 1px solid #666666;
  margin: auto;
`
export const TitleTech = styled.h3`
  ${font({Fmax: 28, Fmin: 20, weight: 700})};
  margin-bottom: 20px;
  text-align: center;
`
export const StyledDivButtonBack = styled.div`
  width: 100px;
  margin-top: 70px;
  padding: 40px 0;
`
export const TechImage = styled.div`
  width: 620px;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputGroup = styled.div`
  position: relative;
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  cursor: pointer;
`
export const StyledSpan = styled.span`
  display: flex;
  gap:20px;
  ${font({Fmax: 16, Fmin: 9, weight: 600})};
  margin-bottom: 10px;
  text-align: center;
`