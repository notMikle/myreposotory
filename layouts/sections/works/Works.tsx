import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';
import {Container} from '@/components/Container';


export const Works: React.FC = () => {
    return (
        <StyledWorks id='projects'>
            <Container>
                <SectionTitle>Наши работы</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'30px'}>
                    <Work title={'social Network'} src={''}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Work title={'todo'} src={''}
                          description={'lorem This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Work title={'todo'} src={''}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

`
