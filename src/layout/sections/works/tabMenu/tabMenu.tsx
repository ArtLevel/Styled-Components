import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from '../../../../components/common/Link.styles'

interface IMenu {
	items: string[]
}

export const TabMenu: FC<IMenu> = (props) => {
	const { items } = props

	return (
		<StyledTabMenu>
			<ul>
				{items.map((title, index) =>
					<ListItem key={index}>
						<Link href='#'>{title}</Link>
					</ListItem>)}
			</ul>
		</StyledTabMenu>
	)
}

const StyledTabMenu = styled.nav`
  ul {
    max-width: 352px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px;

    border: 1px solid lavender;
  }
`

const ListItem = styled.li`

`
