import React from 'react'
import styled from 'styled-components'
import { SocialList } from './socialList/SocialList'
import { FlexWrapper } from '../../components/common/FlexWrapper.styled'
import { theme } from '../../styles/Theme'

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
				<Name>GigaChad</Name>
				<SocialList items={SocialIconItems} />
				<Copyright>© 2023 GigaChad, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
  padding: 40px 0;
  background-color: ${theme.colors.primaryBgColor};
`

const Name = styled.footer`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`