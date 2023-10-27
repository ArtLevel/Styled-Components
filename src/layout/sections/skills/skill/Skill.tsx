import React, { FC } from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'

interface ISkill {
	iconId: string
	skillTitle: string
	skillText: string
}

export const Skill: FC<ISkill> = (props) => {
	const { skillTitle, skillText, iconId, ...restProps } = props

	return (
		<StyledSkill>
			<Icon iconId={iconId} />
			<SkillTitle>{skillTitle}</SkillTitle>
			<SkillText>{skillText}</SkillText>
		</StyledSkill>
	)
}

const StyledSkill = styled.div`
  width: 30%;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`
