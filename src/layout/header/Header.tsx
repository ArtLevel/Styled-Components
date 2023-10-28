import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/common/Container.styled'
import { FlexWrapper } from '../../components/common/FlexWrapper.styled'
import { HeaderMenu } from './headerMenu/HeaderMenu'

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
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo />
					<HeaderMenu items={headerItems} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`
