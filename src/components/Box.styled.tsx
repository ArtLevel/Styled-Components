import { styled } from 'styled-components'
import { Link } from './Link.styled'
import { theme } from '../styles/Theme.styled'

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`
