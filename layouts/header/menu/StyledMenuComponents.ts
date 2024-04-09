import styled, {css} from 'styled-components';
import {theme} from '@/styles/theme';
import {Link} from 'react-scroll'

export const StyledMenuMobile = styled.nav`
 
`
export const StyledMenuDesktop = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
export const LinkWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(140, 137, 137, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.3s;

  ${props => props.isOpen && css`
    transform: translateY(0%);
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    a{
     
    }
  }
`
export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 8888888;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.primaryText};
    position: absolute;
    left: 40px;
    bottom: 65px;

    ${props => props.isOpen && css`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      display: block;
      content: '';
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryText};
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css`
        transform: rotate(45deg);
      `}
    }

    &::after {
      display: block;
      content: '';
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.primaryText};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css`
        transform: rotate(-45deg);
        width: 36px;
      `}
    }
  }
`
export const ListItem = styled.li`
`
export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.secondaryText};

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    transition: 0.6s;
    height: 2px;
    background-color: ${theme.colors.primaryText};
    bottom: 0
  }

  &:hover, &.active {
    color: ${theme.colors.primaryText};
    transform: translateY(-1px);

    &::before {
      width: 100%
    }
  }
}
`
export const LinkSocial = styled.a`
  display: inline-block;
  color: ${theme.colors.secondaryText};
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primaryText};
    transform: translateY(-1px);
  }
`

