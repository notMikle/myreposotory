import styled from 'styled-components';


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    rowGap?: string
    columnGap?: string
    padding?:string
}
export const GridWrapper = styled.div<FlexWrapperPropsType>`
  padding: ${(props => props.padding || '0px')};;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  //flex-direction: ${(props => props.direction || 'row')};
  justify-content: ${(props => props.justify || 'flex-start')};
  align-items: ${(props => props.align || 'stretch')};
  //flex-wrap: ${(props => props.wrap || 'nowrap')};
  height: 100%;
  row-gap: ${(props => props.rowGap) || '10px'}
  column-gap: ${(props => props.columnGap) || '10px'}
  //grid-template-rows: repeat(3, 150px);
`
