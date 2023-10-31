import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'

interface IMenu {
	items: string[]
}

export const MobileMenu: FC<IMenu> = (props) => {
	const { items } = props

	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={true}>
				<span></span>
			</BurgerButton>

			<MobileMenuPopup isOpen={true}>
				<ul>
					{items.map((title, index) => <ListItem key={index}>
						<Link href='#'>
							{title}
							<Mask>
								<span>{title}</span>
							</Mask>
							<Mask>
								<span>{title}</span>
							</Mask>
						</Link>
					</ListItem>)}
				</ul>
			</MobileMenuPopup>
		</StyledMobileMenu>
	)
}

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`

interface IPopup {
	isOpen: boolean
}

const MobileMenuPopup = styled.div<IPopup>`
  background: rgba(31, 31, 32, 0.90);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 110;
  display: none;

  ${props => props.isOpen && css<IPopup>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 30px;
  }
`

const BurgerButton = styled.button<IPopup>`
  width: 200px;
  height: 200px;

  position: absolute;
  top: -100px;
  right: -100px;

  cursor: pointer;

  span {
    width: 36px;
    height: 2px;

    display: block;
    background-color: ${theme.colors.fontColor};

    position: absolute;
    left: 40px;
    bottom: 50px;

    z-index: 120;

    ${props => props.isOpen && css<IPopup>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      width: 36px;
      height: 2px;

      display: block;
      background-color: ${theme.colors.fontColor};
      transform: translateY(-10px);


      ${props => props.isOpen && css<IPopup>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      width: 24px;
      height: 2px;

      display: block;
      background-color: ${theme.colors.fontColor};
      transform: translateY(10px);


      ${props => props.isOpen && css<IPopup>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const Link = styled.a`
  color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Josefin Sans', sans-serif;
`


const Mask = styled.span`
  height: 50%;
  display: inline-block;
  overflow: hidden;

  color: ${theme.colors.accentColor};

  position: absolute;
  top: 0;
  left: 0;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.fontColor};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`
