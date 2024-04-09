import React, {ReactNode} from 'react';
import {Header} from '@/layouts/header/Header';
import {Footer} from '@/layouts/sections/footer/Footer';
import {GlobalStyle} from '@/styles/GlobalStyled';
import {Container} from '@/components/Container';
import styled from 'styled-components';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <SLayoyt>
            <GlobalStyle/>
            <Header/>
            <Container>
                <div>{children}</div>
            </Container>
            <Footer/>
        </SLayoyt>
    );
};

export default Layout;
export const SLayoyt = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`
