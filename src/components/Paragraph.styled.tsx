import { css, styled } from 'styled-components'
import { theme } from '../styles/Theme.styled'

interface IParagraph {
	fontSize?: string
	fontWeight?: 'bold' | 'medium'
	paragraphType: 'p' | 'h3'
}

export const Paragraph = styled.p<IParagraph>`
  font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || 'medium'};

  ${props => props.paragraphType === 'p' && css<IParagraph>`
    color: ${theme.colors.grey.light};
  `}

  ${props => props.paragraphType === 'h3' && css<IParagraph>`
    color: ${theme.colors.grey.dark};
  `}
`
