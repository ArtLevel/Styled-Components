import { styled } from 'styled-components'
import { theme } from '../styles/Theme.styled'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 350px;

  justify-content: center;

  padding: 10px;
  border-radius: 10px;

  background-color: white;

  gap: 20px;

  box-shadow: 0 0 20px 10px ${theme.colors.grey.light};
`