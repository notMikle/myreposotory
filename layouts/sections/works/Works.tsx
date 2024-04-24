import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';
import {Container} from '@/components/Container';
import {works} from '@/data/data';
import {handleAllClick} from '@/assets/function';
import {FaArrowRight} from 'react-icons/fa';
import {ArrowAll, Tech} from '@/layouts/sections/skils/ourTechnics';
import router from 'next/router';
import {Button} from '@/components/Button';

export const handleObjectsClick = () => {
    router.push('/OurWorks');
};

const worksNew = works.filter(el => el.tag === 'main')
export const Works: React.FC = () => {
    return (
        <StyledWorks id="projects">
            <Container>
                <SectionTitle>Наши работы</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'30px'}>
                    {worksNew.map(el =>
                        <Work key={el.id} title={el.title} src={''}
                              description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                              stack={`${el.tech.map(el => el)}`}
                              photo={el.image}
                              id={el.id}
                        />

                    )}
                    <Button onClick={handleObjectsClick}>
                        <h3>Смотреть все объекты</h3>
                        <ArrowAll><FaArrowRight size={40}/></ArrowAll>
                    </Button>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

`
