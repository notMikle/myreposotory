import styled from 'styled-components';


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?:string
    marginLeft?:string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  padding: ${(props => props.padding || '0px')};;
  flex-direction: ${(props => props.direction || 'row')};
  justify-content: ${(props => props.justify || 'flex-start')};
  align-items: ${(props => props.align || 'stretch')};
  flex-wrap: ${(props => props.wrap || 'nowrap')};
  height: 100%;
  gap: ${(props => props.gap) || '10px'};
  margin-left:${(props => props.marginLeft) || '0px'}
  
`
