import React, { FC } from 'react'
import styled from 'styled-components'

interface IMenu {
	items: string[]
}

export const Menu: FC<IMenu> = (props) => {
	const { items } = props

	return (
		<StyledMenu>
			<ul>
				{items.map((title, index) => <li key={index}><a href='#'>{title}</a></li>)}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`
