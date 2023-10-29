import React, { FC } from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

interface ISocialItem {
	iconId: string
}

export const SocialItem: FC<ISocialItem> = (props) => {
	const { iconId } = props

	return (
		<StyledSocialItem>
			<SocialLink>
				<Icon iconId={iconId} height='21px' width='21px' viewBox='0 0 21px 21px' iconType='social' />
			</SocialLink>
		</StyledSocialItem>
	)
}

const StyledSocialItem = styled.li`

`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.accentColor};

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  cursor: pointer;

  &:hover {
    color: ${theme.colors.primaryBgColor};
    transform: translateY(-4px);
  }
`
