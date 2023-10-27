import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

const headerItems = [
	'Home',
	'Skills',
	'Works',
	'Testimony',
	'Contact'
]

export const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu items={headerItems} />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
  background-color: darkseagreen;
  display: flex;
  justify-content: space-between;
`
