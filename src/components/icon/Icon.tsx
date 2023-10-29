import React, { FC } from 'react'
import iconsSprite from '../../assets/images/icons/iconsSprite.svg'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'

interface IIcon {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	iconType?: 'social'
}

export const Icon: FC<IIcon> = (props) => {
	const { iconId, width, height, viewBox, iconType } = props

	return (
		<StyledIcon width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill='none'
		            iconType={iconType}
		            xmlns='http://www.w3.org/2000/svg'>
			<use xlinkHref={`${iconsSprite}#${iconId}`} />
		</StyledIcon>
	)
}

interface IStyledIcon {
	iconType?: 'social'
}

const StyledIcon = styled.svg<IStyledIcon>`
  color: ${theme.colors.accentColor};

  ${props =>
          props.iconType && props.iconType === 'social' && css<IStyledIcon>`
            color: inherit;
          `}
}
`
