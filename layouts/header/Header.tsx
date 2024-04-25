import React, {useEffect, useState} from 'react';
import {DesktopMenu} from '@/layouts/header/menu/DesktopMenu';
import {Logo} from '@/components/logo/Logo';
import {Container} from '@/components/Container';
import {FlexWrapper} from '@/components/FlexWrapper';
import {MobileMenu} from '@/layouts/header/menu/MobileMenu';
import {StyledHeader} from '@/layouts/header/Header_styles';
import {animateScroll as scroll} from 'react-scroll'
import styled from 'styled-components';
import {useRouter} from 'next/router';

export const Header: React.FC = () => {
    let a = global.innerWidth
    const [width, setWidth] = useState(a)
    const breakpoint = 768

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    const router = useRouter()
    const isHomePage = router.pathname === '/';

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <StyledA href={isHomePage?'#main':'/'} onClick={() => scroll.scrollToTop()}><Logo/><span>СУМ ЦММ</span></StyledA>
                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledA = styled.a`
  display: flex;
  gap: 20px;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 600;
  }
`
