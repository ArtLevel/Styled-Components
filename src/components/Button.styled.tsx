import { styled } from 'styled-components'
import { theme } from '../styles/Theme.styled'

export const Button = styled.button`
  width: 86px;
  height: 30px;

  font-weight: bold;

  border-radius: 5px;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};

  color: ${theme.colors.secondary};

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }
`
