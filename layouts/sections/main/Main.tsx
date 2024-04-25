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

export const Main: React.FC = () => {
    return (
        <StyledMain id='main'>
            <Container>
                <StImage src="/group11.svg" alt="" width={750} height={750}/>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <TextBlock>
                        <SmallText>Привет!</SmallText>
                        <Name>Мы занимаемся арендой</Name>
                        <Name> техники с 1997 года</Name>
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
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
export const StImage = styled(Image)`
  opacity: 0.9;
  position: absolute;
  left: 80%;
  top: 0;
  transition: 3s;
  transform: translateX(-300px);
  
`