import React from 'react';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Container} from '@/components/Container';
import Typewriter from 'typewriter-effect';
import {
    Name,
    SmallText,
    StyledMain,
    StyleH1,
    TextBlock
} from '@/layouts/sections/main/MainStyled';
import Image from 'next/image';
import styled from 'styled-components';
import mainImg from '@/public/mainImg.png'
import {theme} from '@/styles/theme';

export const Main: React.FC = () => {
    return (
        <StyledMain id='main'>
            <Container>
                <FlexWrapper align={'center'} wrap={'wrap'}>
                    <TextBlock>
                        <SmallText>Привет!</SmallText>
                        <Name>Мы занимаемся арендой техники с 1997 года</Name>
                        <Name></Name>
                        <StyleH1>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Успех-дело техники.', 'Техника для ваших проектов!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </StyleH1>
                    </TextBlock>
                    <StImage src='/Group11.svg' alt="" width={869} height={459}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
export const StImage = styled(Image)`
  max-width: 100%;
  opacity: 0.9;
  position: absolute;
  left: 80%;
  top: 100px;
  transition: 5s;
  transform: translateX(-300px);
  @media ${theme.media.tablet}{
    display: none;
  }
`