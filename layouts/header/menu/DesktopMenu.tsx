import React from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {Menu} from '@/layouts/header/menu/Menu';
import {StyledMenuDesktop} from '@/layouts/header/menu/StyledMenuComponents';


export const DesktopMenu: React.FC = () => {
    return (
        <StyledMenuDesktop>
            <Menu/>
        </StyledMenuDesktop>
    );
};
