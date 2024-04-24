import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';
import {Container} from '@/components/Container';
import Layout from '@/layouts/layout';
import {works} from '@/data/data';


export const Works: React.FC = () => {
    return (
        <Layout>
            <StyledWorks id="projects">
                <Container>
                    <SectionTitle>Наши работы</SectionTitle>
                    <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'30px'}>
                        {works.map(el=>
                            <Work key={el.id} title={el.title} src={''}
                                  description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                  stack={`${el.tech.map(el=>' '+el)}`}
                                  photo={el.image}
                                  id={el.id}
                            />
                        )}
                    </FlexWrapper>
                </Container>
            </StyledWorks>
        </Layout>
    );
};
const StyledWorks = styled.section`
  margin-top: 50px;
  min-height: 100vh;
`
export default Works
