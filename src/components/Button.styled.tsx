import { styled } from 'styled-components'
import { MyAnimation } from '../styles/animation/Animations'

export const StyledBtn = styled.button`
  color: snow;
  background-color: blue;
  padding: 10px 20px;
  font-size: 2rem;

  &:hover {
    background-color: aqua;
  }

  &:last-child {
    background-color: darkgreen;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 15px;
  background-color: orange;

  &:hover {
    animation: ${MyAnimation} 2s ease-out infinite;
  }
`
