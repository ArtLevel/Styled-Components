import React from 'react'
import styled from 'styled-components'
import { SocialList } from './socialList/SocialList'
import { FlexWrapper } from '../../components/common/FlexWrapper.styled'

const SocialIconItems = [
	'instagram',
	'telegram',
	'vk',
	'linkedIn'
]

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction='column' align='center'>
				<Name>Svetlana</Name>
				<SocialList items={SocialIconItems} />
				<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: rosybrown;
`

const Name = styled.footer`

`

const Copyright = styled.small`

`