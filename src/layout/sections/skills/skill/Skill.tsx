import React, { FC } from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/common/FlexWrapper.styled'

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
  width: 380px;

  padding: 60px 20px 40px;
`

const IconWrapper = styled.div`
  display: flex;

  position: relative;

  &::before {
    content: '';
    display: inline-block;

    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);

    transform-origin: top left;
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;

  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`
