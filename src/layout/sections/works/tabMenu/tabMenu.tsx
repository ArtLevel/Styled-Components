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
  margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`

const ListItem = styled.li`
  
`
