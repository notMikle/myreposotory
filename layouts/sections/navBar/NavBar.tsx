import React from 'react';
import styled from 'styled-components';
import {StyledTitle} from '@/layouts/sections/skils/SkillsStyled';
import {
    handleAllClick,
    handleBulldozerClick,
    handleCraneClick,
    handleExcavatorClick, handleLiftClick,
    handleTruckClick
} from '@/assets/function';

export const NavBar = () => {
    return (
        <StyledNavbar>
            <StyledTitle>Наша техника:</StyledTitle>
            <StyledUl>
                <StyledLi onClick={handleAllClick} >Вся техника</StyledLi>
                <StyledLi onClick={handleBulldozerClick}>Бульдозеры</StyledLi>
                <StyledLi onClick={handleCraneClick}>Краны</StyledLi>
                <StyledLi onClick={handleTruckClick}>Автотранспорт</StyledLi>
                <StyledLi onClick={handleExcavatorClick}>Экскаваторы</StyledLi>
                <StyledLi onClick={handleLiftClick}>Автовышки</StyledLi>
            </StyledUl>
        </StyledNavbar>
    );
};
const StyledNavbar = styled.div`
  position: fixed;
  width: 200px;
`
const StyledUl = styled.ul`
    margin-top: 8px;
`
const StyledLi = styled.nav`
  padding: 7px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    color: rgb(255, 170, 0);
  }
`
