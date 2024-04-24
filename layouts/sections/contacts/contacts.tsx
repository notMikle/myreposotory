import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Container} from '@/components/Container';
import MyMapWithRoute from '@/components/map';
import {FlexWrapper} from '@/components/FlexWrapper';
import RhfWithAction from '@/components/form/Form';

export const Contacts = () => {
    return (
        <StyledContacts id='contacts'>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                    <MyMapWithRoute/>
                    <RhfWithAction/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

export const StyledContacts = styled.section`
    position: relative;
`
