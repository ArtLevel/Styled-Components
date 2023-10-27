import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/common/FlexWrapper'
import { Skill } from './skill/Skill'
import { SectionTitle } from '../../../components/common/SectionTitle'

export const Skills = () => {
	return (
		<SectionSkills>
			<SectionTitle>My Skills</SectionTitle>

			<FlexWrapper wrap='wrap' justify='space-between'>
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='HTML'
					iconId='html' />
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='CSS'
					iconId='css' />
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='REACT'
					iconId='react' />
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='Styled Components'
					iconId='styledComponents' />
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='TypeScript'
					iconId='typeScript' />
				<Skill
					skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
					skillTitle='WEB DESIgN'
					iconId='figma' />
			</FlexWrapper>
		</SectionSkills>
	)
}

const SectionSkills = styled.section`
  min-height: 100vh;
  background-color: lightpink;
`
