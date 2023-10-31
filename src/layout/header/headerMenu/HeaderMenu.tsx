import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

interface IMenu {
	items: string[]
}

export const HeaderMenu: FC<IMenu> = (props) => {
	const { items } = props

	return (
		<StyledHeaderMenu>
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
		</StyledHeaderMenu>
	)
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${theme.media.tablet} {
    display: none;
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
