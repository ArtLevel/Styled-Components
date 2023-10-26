import { css, styled } from 'styled-components'

interface IBox {
	boxType: 'ButtonsBlock'
}

export const Box = styled.p<IBox>`
  ${props => props.boxType === 'ButtonsBlock' && css<IBox>`
    display: flex;

    gap: 12px;
  `}
`
