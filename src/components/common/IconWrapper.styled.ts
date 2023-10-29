import styled from 'styled-components'

export const IconWrapper = styled.div`
  display: flex;

  position: relative;

  &::before {
    content: '';
    display: inline-block;

    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);

    transform-origin: top left;
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
  }
`