import styled from 'styled-components';
import {theme} from '@/styles/theme';

export const StyledSkills = styled.section`
  position: relative;
  min-height: 100vh;
`
export const SkillWrapper = styled.div`
  flex-grow: 1;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`
export const StyledTitle = styled.h3`
  font-size: 20px;
  padding-top: 20px;
  color: ${theme.colors.primaryText};
`

