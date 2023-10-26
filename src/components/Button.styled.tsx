import { css, styled } from 'styled-components'
import { MyAnimation } from '../styles/animation/Animations'

interface IStyledBtn {
	color?: string
	fontSize?: string

	btnType: 'primary' | 'outlined'
	active?: boolean
}

export const StyledBtn = styled.button<IStyledBtn>`
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};

  ${props => props.btnType === 'outlined' && css<IStyledBtn>`
    border: 2px solid ${props => props.color || 'lightpink'};
    color: ${props => props.color || 'white'};
    background-color: transparent;

    &:hover {
      background-color: lightpink;
    }
  `}


  ${props => props.btnType === 'primary' && css<IStyledBtn>`
    background-color: ${props => props.color || 'lightpink'};
    color: snow;

    &:hover {
      border: 2px solid ${props => props.color || 'lightpink'};
      background-color: transparent;
    }
  `}

  ${props => props.active && css<IStyledBtn>`
    box-shadow: 5px 5px 5px 5px white;
  `}
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 15px;
  background-color: orange;

  &:hover {
    animation: ${MyAnimation} 2s ease-out infinite;
  }
`
