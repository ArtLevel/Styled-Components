import React, { FC } from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/common/FlexWrapper.styled'
import { IconWrapper } from '../../../../components/common/IconWrapper.styled'
import { theme } from '../../../../styles/Theme'

interface ISkill {
	iconId: string
	skillTitle: string
	skillText: string
}

export const Skill: FC<ISkill> = (props) => {
	const { skillTitle, skillText, iconId, ...restProps } = props

	return (
		<StyledSkill>
			<FlexWrapper direction='column' align='center'>
				<IconWrapper>
					<Icon iconId={iconId} />
				</IconWrapper>
				<SkillTitle>{skillTitle}</SkillTitle>
				<SkillText>{skillText}</SkillText>
			</FlexWrapper>
		</StyledSkill>
	)
}

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;

  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 60px 0 40px;

  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;

  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`
