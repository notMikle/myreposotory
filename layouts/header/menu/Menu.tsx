import React, {useContext} from 'react';
import {Icon} from '@/components/icon/icon';
import {Social} from '@/context/Context';
import {NavLink, LinkSocial, ListItem} from '@/layouts/header/menu/StyledMenuComponents';
import {SlBasket} from 'react-icons/sl';
import router, {useRouter} from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import {theme} from '@/styles/theme';


export const Menu: React.FC = () => {
    const router = useRouter();
    const network = useContext(Social);
    const isHomePage = router.pathname === '/';

    return (

        <div>
            {isHomePage ? <ul>
                    <ListItem><NavLink to={'main'} smooth={true} activeClass="active"
                                       spy={true}>Главная</NavLink></ListItem>
                    <ListItem><NavLink to={'skills'} smooth={true} activeClass={'active'}
                                       spy={true}>Наша техника</NavLink></ListItem>
                    <ListItem><NavLink to={'projects'} smooth={true} activeClass={'active'}
                                       spy={true}>О нас</NavLink></ListItem>
                    <ListItem><NavLink to={'contacts'} smooth={true} activeClass={'active'}
                                       spy={true}>Контакты</NavLink></ListItem>
                    <ListItem>
                        {/*<LinkSocial><Icon icon={SlBasket} size={'25px'}/>*/}
                        {/*</LinkSocial>*/}
                    </ListItem>
                </ul>
                :
                <ul>
                    <ListItem><StyledLink href={'/'}>Главная</StyledLink></ListItem>
                    <ListItem><StyledLink href={'/techniks/park?category=all'}>Наша техника</StyledLink></ListItem>
                    <ListItem><StyledLink href={'/#projects'}>О нас</StyledLink></ListItem>
                    <ListItem><StyledLink href={'/#contacts'}>Контакты</StyledLink></ListItem>
                    {/*<LinkSocial><Icon icon={SlBasket} size={'25px'}/>*/}
                    {/*</LinkSocial>*/}
                    {/*<ListItem><small>+7-(472)5-43-99-31</small></ListItem>*/}
                </ul>}

        </div>
    );
};
export const StyledLink = styled(Link)`
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
