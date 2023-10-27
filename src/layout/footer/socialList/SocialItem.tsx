import React, { FC } from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

interface ISocialItem {
	iconId: string
}

export const SocialItem: FC<ISocialItem> = (props) => {
	const { iconId } = props

	return (
		<StyledSocialItem>
			<SocialLink>
				<Icon iconId={iconId} height='21px' width='21px' viewBox='0 0 21px 21px' />
			</SocialLink>
		</StyledSocialItem>
	)
}

const StyledSocialItem = styled.li`

`

const SocialLink = styled.a`

`
