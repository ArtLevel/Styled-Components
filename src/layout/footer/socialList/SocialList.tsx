import React, { FC } from 'react'
import styled from 'styled-components'
import { SocialItem } from './SocialItem'

interface ISocialList {
	items: string[]
}

export const SocialList: FC<ISocialList> = (props) => {
	const { items } = props

	return (
		<StyledSocialList>
			{items.map((link, index) => <SocialItem key={index} iconId={link} />)}
		</StyledSocialList>
	)
}

const StyledSocialList = styled.ul`
  display: flex;

  margin: 30px 0;

  gap: 20px;
`
