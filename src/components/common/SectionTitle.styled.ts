import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

export const SectionTitle = styled.h2`
  text-align: center;

  ${font({ family: 'Josefin Sans', weight: 600, Fmax: 36, Fmin: 30 })}

  margin-bottom: 90px;
  letter-spacing: 5px;

  position: relative;

  &::before {
    content: '';
    width: 55px;
    height: 1px;

    display: inline-block;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;

    @media ${theme.media.tablet} {
      bottom: -24px;
    }
  }
`